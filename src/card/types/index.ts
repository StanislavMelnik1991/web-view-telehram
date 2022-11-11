import { ApiProperty } from '@nestjs/swagger';

export class CreateCardBody {
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'image url',
  })
  readonly img: string;

  @ApiProperty({ description: 'card name' })
  readonly name: string;

  @ApiProperty({ description: 'settings id' })
  readonly settingsId: number;
}

export type CreateCardParams = number;
export class GetCardParams {
  @ApiProperty({
    example: 1,
    description: 'card id',
  })
  readonly id: number;
}
export class CreateCardDto {
  readonly img: string;
  readonly name: string;
  readonly settingsId: number;
}
export class GetCardDto {
  readonly id: number;
}
