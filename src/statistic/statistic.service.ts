import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/card/card.entity';
import { Game } from 'src/game/game.entity';
import { Round } from 'src/round/round.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { GetGameDto } from './types';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    @InjectRepository(Round)
    private roundRepository: Repository<Round>,
  ) {}

  async getAllGames() {
    try {
      /* const games = (await this.gameRepository.find({
        skip: offset,
        take: limit,
        order: { [sortType]: sortField },
        select: { id: true, createdAt: true },
      })) as Array<{ id: number; createdAt: Date }>;
      const total = await this.gameRepository.count();
      return { total, games }; */

      const user = await this.usersRepository.find();
      const game = await this.gameRepository.find();
      const card = await this.cardRepository.find();
      const round = await this.roundRepository.find();
      return { user, game, card, round };
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getGame({ id }: GetGameDto) {
    try {
      const steps: Array<StepType> = [];
      const game: GameType = {
        id,
        steps,
      };
      return game;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

type GameType = {
  id: number;
  steps: Array<StepType>;
};

type StepType = {
  card: { id: number; img: string; name: string };
  users: Array<UserType>;
};
type UserType = {
  id: number;
  name: string;
  img?: string;
  result: number;
  isSpy: boolean;
};
