import { Injectable } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { DIFFICULTY } from 'src/game-settings/constants';
import { GameSettingsService } from 'src/game-settings/game-settings.service';
import { GetGameDto } from './types';

@Injectable()
export class StatisticService {
  constructor(
    private settingsService: GameSettingsService,
    private cardService: CardService,
  ) {}

  async getAllGames(difficulty: DIFFICULTY) {
    try {
      const setting = await this.settingsService.findByDifficulty({
        difficulty,
      });
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
