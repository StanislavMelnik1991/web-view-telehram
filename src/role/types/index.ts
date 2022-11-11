import { ApiProperty } from '@nestjs/swagger';
import { ROLE } from '../constants';

export class CreateRoleBody {
  @ApiProperty({
    example: 'ADMIN',
    description: 'role',
  })
  readonly role: ROLE;

  @ApiProperty({ description: 'user role' })
  readonly description: string;
}

export class CreateUserRoleParams {
  @ApiProperty({
    example: 1,
    description: 'role id',
  })
  readonly id: number;
}
export class CreateUserRoleBody {
  @ApiProperty({
    example: 1,
    description: 'role id',
  })
  readonly roleId: number;
}
export class CreateRoleDto extends CreateRoleBody {}
export class CreateUserRoleDto {
  readonly id: number;
  readonly roleId: number;
}
