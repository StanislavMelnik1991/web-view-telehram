import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersInGameService } from 'src/users-in-game/users-in-game.service';
import { Repository } from 'typeorm';
import { Round } from './round.entity';
import { CreateRound } from './types/round.types';

@Injectable()
export class RoundsService {
  constructor(
    @InjectRepository(Round)
    private roundRepository: Repository<Round>,
    private usersInGameService: UsersInGameService,
  ) {}

  async createRound({ game, cards }: CreateRound) {
    const card = this.randomEl(cards);
    const users = await this.usersInGameService.findAllUsersInGame(game);
    const spy = this.randomEl(users);
    const round = this.roundRepository.create({ spy, card, game });
    await this.roundRepository.save(round);
    return round;
  }

  private randomEl(arr: Array<any>) {
    // (0; arr.length - 1]
    const elNumber = Math.round(Math.random() * arr.length);
    return arr[elNumber];
  }
}
