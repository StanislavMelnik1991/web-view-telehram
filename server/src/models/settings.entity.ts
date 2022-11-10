import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Card } from './card.entity';
import { Game } from './game.entity';

@Entity('settings')
export class Settings extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
    nullable: false,
  })
  difficulty!: string;

  @OneToMany(() => Card, (card) => card.setting)
  cards!: Card[];
  @OneToMany(() => Game, (game) => game.setting)
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
