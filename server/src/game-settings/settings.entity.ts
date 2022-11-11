import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Card } from '../card/card.entity';
import { Game } from '../game/game.entity';
import { DIFFICULTY } from './constants';

@Entity('settings')
export class Settings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
    type: 'enum',
    enum: DIFFICULTY,
  })
  difficulty!: DIFFICULTY;

  @OneToMany(() => Card, (card) => card.setting)
  cards!: Card[];
  @OneToMany(() => Game, (game) => game.setting)
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
