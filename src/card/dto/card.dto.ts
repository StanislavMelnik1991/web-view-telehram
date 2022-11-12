import { ApiProperty } from '@nestjs/swagger';

export class CreateCardDto {
  @ApiProperty({
    description: 'image',
  })
  readonly img: any;

  @ApiProperty({ description: 'card name' })
  readonly name: string;

  @ApiProperty({
    example: 1,
    description: 'settings id',
  })
  readonly id: number;
}
