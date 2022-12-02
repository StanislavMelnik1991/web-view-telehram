import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserToGame } from './types/user.types';
import { UsersInGame } from './usersInGame.entity';

@Injectable()
export class UsersInGameService {
  constructor(
    @InjectRepository(UsersInGame)
    private userInGameRepository: Repository<UsersInGame>,
  ) {}

  async addUserToGame({ game, user }: AddUserToGame) {
    const userInGame = this.userInGameRepository.create({ game, user });
    await this.userInGameRepository.save(userInGame);
    return userInGame;
  }

  async removeUserToGame({ game, user }: AddUserToGame) {
    await this.userInGameRepository.delete({
      game,
      user,
    });
    return 'ok';
  }

  async findAllUsersInGame(game: number) {
    const users = await this.userInGameRepository.findBy({ game });
    return users.map((user) => user.user);
  }
}
