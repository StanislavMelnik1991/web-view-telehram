import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from './userRole.entity';
import { ROLE } from './constants';

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

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
