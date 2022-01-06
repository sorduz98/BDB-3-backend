import {
  IsString,
  IsNotEmpty,
  Length,
  IsPositive,
  IsOptional,
  Min,
  IsNumber,
  IsDate,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(10)
  @ApiProperty({
    description: 'Users full name.',
  })
  readonly fullname: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly birthdate: Date;

  @IsNumber()
  @Min(10000)
  @IsNotEmpty()
  @ApiProperty()
  readonly identification: number;

  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'father_id in Database.',
  })
  readonly father_id: number;

  @IsPositive()
  @IsOptional()
  @ApiProperty({
    description: 'mother_id in Database.',
  })
  readonly mother_id: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
