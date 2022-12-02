import { Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';
import { User } from '../user/user.entity';
import { Card } from '../cards/cards.entity';
import { Game } from '../game/game.entity';

@Entity('rounds')
export class Round extends BaseEntity {
  @ApiProperty({ example: 1, description: 'spy id' })
  @ManyToOne(() => User, (user) => user.id)
  spy: number;

  @ApiProperty({ example: 1, description: 'card id' })
  @ManyToOne(() => Card, (user) => user.id)
  card: number;

  @ApiProperty({ example: 1, description: 'game id' })
  @ManyToOne(() => Game, (game) => game.id)
  game: number;
}
