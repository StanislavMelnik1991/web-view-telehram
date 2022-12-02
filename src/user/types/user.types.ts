export type CreateUser = {
  email: string;
  password: string;
  name: string;
  avatar: string;
};

export type FindUserByEmail = { email: string };
export type FindUserById = { id: number };
export type BanUser = { reason: string; id: number };
