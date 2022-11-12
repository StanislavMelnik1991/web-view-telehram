import { ApiProperty } from '@nestjs/swagger';

export class GetAllGamesDto {
  @ApiProperty({
    example: 'Bearer {token}',
    description: 'Authorization token',
  })
  readonly token: string;

  @ApiProperty({ example: '10' })
  readonly limit: number;

  @ApiProperty({ example: '10' })
  readonly offset: number;

  @ApiProperty({ example: 'asc' })
  readonly sortType: string;

  @ApiProperty({ example: 'asc' })
  readonly sortField: string;
}

export class GetGameDto {
  @ApiProperty({
    example: '1',
    description: 'game id',
  })
  readonly id: number;
}
