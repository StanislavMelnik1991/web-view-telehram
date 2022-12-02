import { Entity, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';
import { User } from 'src/user/user.entity';
import { Settings } from '../game-settings/settings.entity';

@Entity('games')
export class Game extends BaseEntity {
  @ApiProperty({ description: 'id game finished?' })
  @Column({ nullable: false, default: false })
  isFinished: boolean;

  @ApiProperty({ example: 'qwerty', description: 'game password' })
  @Column({ nullable: true })
  password: string;

  @ManyToOne(() => User, (user) => user.id)
  creator: number;

  @ManyToOne(() => Settings, (settings) => settings.id)
  settings: number;
}
