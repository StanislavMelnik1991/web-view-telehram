import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ example: 'Ivan', description: 'user name' })
  /* @IsString({ message: 'name mast be string' })
  @Length(2, 16, { message: 'name mast be 2 to 16 characters' }) */
  readonly name: string;

  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  /* @IsString({ message: 'email mast be string' })
  @IsEmail({ message: 'incorrect email' }) */
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  /* @IsString({ message: 'password mast be string' })
  @Length(4, 16, { message: 'password mast be 4 to 16 characters' }) */
  readonly password: string;

  @ApiProperty({ description: 'user jpeg image' })
  readonly img: any;
}
