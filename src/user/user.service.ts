import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import {
  BanUser,
  CreateUser,
  FindUserByEmail,
  FindUserById,
} from './types/user.types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private rolesRepository: Repository<User>,
  ) {}
  async createUser({ email, avatar, name, password }: CreateUser) {
    const user = this.rolesRepository.create({
      email,
      avatar,
      name,
      password,
    });
    await this.rolesRepository.save(user);
    return user;
  }

  async findUserByEmail({ email }: FindUserByEmail) {
    const user = await this.rolesRepository.findOneBy({ email });
    return user;
  }

  async findUserById({ id }: FindUserById) {
    const user = await this.rolesRepository.findOneBy({ id });
    return user;
  }

  async banUser({ reason, id }: BanUser) {
    const user = await this.rolesRepository.findOneBy({ id });
    if (!user) {
      throw new HttpException('user not found', HttpStatus.NOT_FOUND);
    }
    user.isBaned = true;
    user.banReason = reason;
    await this.rolesRepository.save(user);
    return user;
  }
}
