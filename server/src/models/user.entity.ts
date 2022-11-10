import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Round } from './round.entity';
import { Step } from './step.entity';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @Column({ nullable: false })
  password!: string;

  @Column()
  img!: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email!: string;
  @OneToMany(() => Round, (round) => round.winner)
  @OneToMany(() => Round, (round) => round.spy)
  @OneToMany(() => Step, (step) => step.user)
  @OneToMany(() => Step, (step) => step.spy)
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
