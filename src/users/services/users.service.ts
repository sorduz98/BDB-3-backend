import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find({ relations: ['father', 'mother'] });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id, {
      relations: ['father', 'mother'],
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto): Promise<User> {
    const father = await this.userRepo.findOne(data.father_id);
    const mother = await this.userRepo.findOne(data.mother_id);
    const user = new User();
    user.fullname = data.fullname;
    user.birthdate = data.birthdate;
    user.identification = data.identification;
    user.father = data?.father_id ? father : null;
    user.mother = data?.mother_id ? mother : null;
    try {
      return await this.userRepo.save(user);
    } catch (error) {
      if (error?.driverError?.code == 23505) {
        throw new BadRequestException(
          `identification ${user.identification} already exists.`,
        );
      }
      throw new InternalServerErrorException();
    }
  }
}
