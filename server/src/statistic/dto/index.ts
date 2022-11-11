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
export class SignInDto {
  @ApiProperty({ example: 'Ivan@mail.ru', description: 'user email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  readonly password: string;
}

export class GetGameDto {
  @ApiProperty({
    example: '1',
    description: 'game id',
  })
  readonly id: number;
}
