import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateGameDTO {
  @IsNotEmpty()
  @ApiProperty({ example: '1', description: 'settings id' })
  @IsNumber({}, { message: 'name mast be number' })
  readonly settings: number;

  @ApiProperty({ example: 'qWerty123', description: 'user password' })
  @IsString({ message: 'password mast be string' })
  @Length(1, 32, { message: 'email mast be 1 to 32 characters' })
  readonly password?: string;
}

export class LoginUserDTO {
  @IsNotEmpty()
  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @IsString({ message: 'email mast be string' })
  @IsEmail({ message: 'incorrect email' })
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'qWerty123', description: 'user password' })
  @IsString({ message: 'email mast be string' })
  @Length(6, 32, { message: 'email mast be 6 to 32 characters' })
  readonly password: string;
}
