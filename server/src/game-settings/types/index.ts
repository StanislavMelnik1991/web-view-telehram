import { ApiProperty } from '@nestjs/swagger';
import { DIFFICULTY } from '../constants';

export class CreateSettingDto {
  @ApiProperty({ description: 'user role' })
  readonly difficulty: DIFFICULTY;
}
