import { ApiProperty } from '@nestjs/swagger';
import { ROLE } from '../role.constants';

export class CreateRoleDto {
  @ApiProperty({
    example: 'ADMIN',
    description: 'role',
  })
  readonly role: ROLE;

  @ApiProperty({ description: 'user role' })
  readonly description: string;
}
