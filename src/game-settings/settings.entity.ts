import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';

import { DIFFICULTY } from 'src/constants/game.constants';

@Entity('settings')
export class Settings extends BaseEntity {
  @ApiProperty({ example: DIFFICULTY.NORMAL, description: 'game difficulty' })
  @Column({ nullable: true })
  difficulty: DIFFICULTY;
}
