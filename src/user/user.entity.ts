import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';
import { ROLE } from 'src/constants/user.constants';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @ApiProperty({ example: 'JohnSmith@mail.com', description: 'user email' })
  @Column({
    nullable: false,
  })
  password: string;

  @ApiProperty({ example: 'John', description: 'user name' })
  @Column({ nullable: false })
  name: string;

  @ApiProperty({ example: 'path.jpeg', description: 'image url' })
  @Column({ nullable: false })
  avatar: string;

  @ApiProperty({ description: 'id user baned?' })
  @Column({ nullable: false, default: false })
  isBaned: boolean;

  @ApiProperty({ example: 'hooliganism', description: 'ban reason' })
  @Column({ nullable: true })
  banReason: string;

  @ApiProperty({ example: ROLE.USER, description: 'role' })
  @Column({ nullable: false, default: ROLE.USER })
  role: ROLE;
}
