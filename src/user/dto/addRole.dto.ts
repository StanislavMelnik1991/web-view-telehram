import { ApiProperty } from '@nestjs/swagger';
import { ROLE } from 'src/role/role.constants';

export class BecomeRoleDto {
  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  readonly role: ROLE;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly id: number;
}
