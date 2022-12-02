import { Entity, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/base-utils/base.entity';
import { Game } from 'src/game/game.entity';
import { User } from 'src/user/user.entity';

@Entity('usersInGame')
export class UsersInGame extends BaseEntity {
  @ApiProperty({ description: 'game id' })
  @ManyToOne(() => Game, (game) => game.id)
  game: number;

  @ApiProperty({ description: 'game id' })
  @ManyToOne(() => User, (user) => user.id)
  user: number;
}
