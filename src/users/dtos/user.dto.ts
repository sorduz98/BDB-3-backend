import {
  IsString,
  IsNotEmpty,
  Length,
  IsPositive,
  IsOptional,
  IsDate,
  Min,
  IsNumber,
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
  readonly birthdate: string;

  @IsNumber()
  @Min(10000)
  @IsNotEmpty()
  @ApiProperty()
  readonly identification: string;

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

  @IsPositive()
  @IsOptional()
  @ApiProperty()
  readonly customerId: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
