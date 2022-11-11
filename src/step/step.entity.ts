import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Card } from '../card/card.entity';
import { Round } from '../round/round.entity';
import { User } from '../user/user.entity';

@Entity('step')
export class Step extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.id)
  user!: number;

  @ManyToOne(() => Round, (round) => round.id)
  round!: number;

  @ManyToOne(() => Card, (card) => card)
  card!: Card;

  @ManyToOne(() => User, (card) => card.id)
  spy!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
