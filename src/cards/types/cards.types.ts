import { MemoryStoredFile } from 'nestjs-form-data/dist/classes/storage';
import { DIFFICULTY } from 'src/constants/game.constants';

export type CreateGame = {
  difficulty: DIFFICULTY;
  title: string;
  img: MemoryStoredFile;
};

export type EditGame = {
  creator: number;
  settings?: number;
  password?: string;
  id: number;
};

export type DeleteGame = {
  creator: number;
  id: number;
};

export type FindUserByEmail = { email: string };
export type FindUserById = { id: number };
export type BanUser = { reason: string; id: number };
