export type CreateGame = {
  creator: number;
  settings: number;
  password?: string;
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
