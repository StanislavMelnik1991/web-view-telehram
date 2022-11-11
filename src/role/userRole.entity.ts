import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from './role.entity';
import { User } from 'src/user/user.entity';

@Entity('userRole')
export class UserRole extends BaseEntity {
  @ApiProperty({ example: '1', description: 'user id', type: 'number' })
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Role, (role) => role.id)
  role!: number;
  @ManyToOne(() => User, (user) => user.id)
  user!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
