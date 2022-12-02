import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import {
  IsFile,
  MaxFileSize,
  HasMimeType,
  MemoryStoredFile,
} from 'nestjs-form-data';

export class CreateUserDTO {
  @IsNotEmpty()
  @ApiProperty({ example: 'John', description: 'user name' })
  @IsString({ message: 'name mast be string' })
  @Length(2, 16, { message: 'name mast be 2 to 16 characters' })
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @IsString({ message: 'email mast be string' })
  @IsEmail({ message: 'incorrect email' })
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'qWerty123', description: 'user password' })
  @IsString({ message: 'password mast be string' })
  @Length(6, 32, { message: 'password mast be 6 to 32 characters' })
  readonly password: string;

  @IsNotEmpty()
  @IsFile()
  @MaxFileSize(1e6)
  @HasMimeType(['image/jpeg', 'image/png'])
  @ApiProperty({ description: 'user image' })
  readonly avatar: MemoryStoredFile;
}

export class LoginUserDTO {
  @IsNotEmpty()
  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @IsString({ message: 'email mast be string' })
  @IsEmail({ message: 'incorrect email' })
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'qWerty123', description: 'user password' })
  @IsString({ message: 'password mast be string' })
  @Length(6, 32, { message: 'password mast be 6 to 32 characters' })
  readonly password: string;
}
