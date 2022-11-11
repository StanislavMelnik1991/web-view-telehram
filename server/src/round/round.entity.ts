import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Card } from '../card/card.entity';
import { Game } from '../game/game.entity';
import { User } from '../user/user.entity';

@Entity('round')
export class Round extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'integer', nullable: false })
  round!: number;

  @ManyToOne(() => User, (user) => user)
  winner!: User;

  @ManyToOne(() => User, (user) => user)
  spy!: User;

  @ManyToOne(() => Card, (card) => card)
  card!: Card;

  @ManyToOne(() => Game, (game) => game.id)
  game!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
