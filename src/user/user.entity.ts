import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Round } from '../round/round.entity';
import { Step } from '../step/step.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/role/role.entity';

@Entity('user')
export class User extends BaseEntity {
  @ApiProperty({ example: '1', description: 'user id', type: 'number' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'ivan', description: 'user name' })
  @Column({ nullable: false })
  name!: string;

  @ApiProperty({ example: 'password', description: 'user password' })
  @Column({ nullable: false })
  password!: string;

  @ApiProperty({ example: 'img.jpeg', description: 'image url' })
  @Column({ nullable: true })
  img!: string;

  @ApiProperty({ example: 'ivan@mail.ru', description: 'user email' })
  @Column({
    unique: true,
    nullable: false,
  })
  email!: string;
  @OneToMany(() => Round, (round) => round.winner)
  @OneToMany(() => Round, (round) => round.spy)
  @OneToMany(() => Step, (step) => step.user)
  @OneToMany(() => Step, (step) => step.spy)
  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[];
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
