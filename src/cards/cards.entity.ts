import { Entity, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';
import { Settings } from '../game-settings/settings.entity';

@Entity('cards')
export class Card extends BaseEntity {
  @ApiProperty({ example: 'image.jpg', description: 'image url' })
  @Column({ nullable: false })
  img: string;

  @ApiProperty({ example: 'forest', description: 'card name' })
  @Column({ nullable: false, unique: true })
  title: string;

  @ManyToOne(() => Settings, (settings) => settings.id)
  settings: number;
}
