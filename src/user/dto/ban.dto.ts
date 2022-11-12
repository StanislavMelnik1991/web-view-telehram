import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 'hooliganism', description: 'ban reason' })
  readonly banReason: string | null;

  @ApiProperty({ example: '1', description: 'user id' })
  readonly id: number;

  @ApiProperty({ description: 'true' })
  readonly isBan: boolean;
}
