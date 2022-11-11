import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Round } from '../round/round.entity';
import { Settings } from '../game-settings/settings.entity';
import { Step } from '../step/step.entity';

@Entity('card')
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  img!: string;
  @Column()
  name!: string;

  @ManyToOne(() => Settings, (setting) => setting.cards, {
    onDelete: 'CASCADE',
  })
  setting!: number;

  @OneToMany(() => Round, (round) => round.card)
  @OneToMany(() => Step, (step) => step.card)
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
