import { Column, Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';
import { User } from '../user/user.entity';
import { Round } from '../rounds/round.entity';
import { Card } from '../cards/cards.entity';

@Entity('steps')
export class Step extends BaseEntity {
  @ApiProperty({ example: 1, description: 'user id' })
  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  user: number;

  @ApiProperty({ example: 1, description: 'round id' })
  @ManyToOne(() => Round, (round) => round.id, { nullable: false })
  round: number;

  @ApiProperty({ example: 1, description: 'card id' })
  @ManyToOne(() => Card, (card) => card.id, { nullable: true })
  card: number;

  @ApiProperty({ example: 1, description: 'user id' })
  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  spy: number;

  @ApiProperty({ example: 1, description: 'round result' })
  @Column({ nullable: false })
  result: number;
}
