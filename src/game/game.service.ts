import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/game/game.entity';
import { Repository } from 'typeorm';
import { CreateGame, DeleteGame, EditGame } from './types/game.types';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
  ) {}

  async createNewGame({ creator, password, settings }: CreateGame) {
    const game = this.gameRepository.create({ creator, settings, password });
    await this.gameRepository.save(game);
    return game;
  }

  async editGame({ creator, password, settings, id }: EditGame) {
    const game = await this.gameRepository.findOneBy({ id });
    if (!game) {
      throw new HttpException('game not found', HttpStatus.NOT_FOUND);
    }
    if (creator !== game.creator) {
      throw new HttpException(
        "user can't edit this game",
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    if (password) {
      game.password = password;
    }
    if (settings) {
      game.settings = settings;
    }
    await this.gameRepository.save(game);
    return game;
  }

  async deleteGame({ creator, id }: DeleteGame) {
    const game = await this.findGameById(id);
    if (creator !== game.creator) {
      throw new HttpException(
        "user can't edit this game",
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    await this.gameRepository.delete({ id: game.id });
    return 'ok';
  }

  async findGameById(id: number) {
    const game = await this.gameRepository.findOneBy({ id });
    if (!game) {
      throw new HttpException('game not found', HttpStatus.NOT_FOUND);
    }
    return game;
  }
}
