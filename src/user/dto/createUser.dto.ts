import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty({ example: 'Ivan', description: 'user name' })
  readonly name: string;

  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;
}
