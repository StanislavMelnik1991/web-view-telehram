import { ApiProperty } from '@nestjs/swagger';
import { ROLE } from 'src/role/constants';

export class SignUpDto {
  @ApiProperty({ example: 'Ivan', description: 'user name' })
  readonly name: string;

  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;
}
export class SignInDto {
  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;
}
export class BecomeRoleDto {
  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  readonly role: ROLE;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly id: number;
}
export class BanUserDto {
  @ApiProperty({ example: 'hooliganism', description: 'ban reason' })
  readonly banReason: string | null;

  @ApiProperty({ example: '1', description: 'user id' })
  readonly id: number;

  @ApiProperty({ description: 'true' })
  readonly isBan: boolean;
}
export type BanUserBodyDto = BanBodyDto | AnBanBodyDto;
class BanBodyDto {
  @ApiProperty({ example: 'hooliganism', description: 'ban reason' })
  readonly banReason: string;
  @ApiProperty({ description: 'true' })
  readonly isBan: true;
}
class AnBanBodyDto {
  @ApiProperty({ description: 'true' })
  readonly isBan: false;
  @ApiProperty({ example: 'hooliganism', description: 'ban reason' })
  readonly banReason: null;
}
