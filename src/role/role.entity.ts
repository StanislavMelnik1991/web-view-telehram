import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ROLE } from './constants';
import { User } from 'src/user/user.entity';

@Entity('role')
export class Role extends BaseEntity {
  @ApiProperty({ example: '1', description: 'user id', type: 'number' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: 'ADMIN', description: 'user role' })
  @Column({ unique: true, nullable: false, type: 'enum', enum: ROLE })
  role!: ROLE;

  @ApiProperty({ description: 'role description' })
  @Column()
  description!: string;

  @ManyToMany(() => User)
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
