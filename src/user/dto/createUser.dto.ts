import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ example: 'Ivan', description: 'user name' })
  @IsString({ message: 'mast be string' })
  @Length(10, 16, { message: '2 to 16 characters' })
  readonly name: string;

  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  @IsString({ message: 'mast be string' })
  @IsEmail({ message: 'incorrect email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @IsString({ message: 'mast be string' })
  @Length(4, 16, { message: '4 to 16 characters' })
  readonly password: string;
}
