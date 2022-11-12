import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty({
    example:
      'https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'image url',
  })
  readonly img: string;

  @ApiProperty({ description: 'card name' })
  readonly name: string;

  @ApiProperty({
    example: 1,
    description: 'settings id',
  })
  readonly id: number;
}
