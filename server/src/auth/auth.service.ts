import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { Repository } from 'typeorm';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async singUp(dto: SignUpDto) {
    let user = this.usersRepository.create(dto);
    user = await this.usersRepository.save(user);
    console.log(user);
    return user;
  }

  async singIn({ email, password }: SignInDto) {
    const user = await this.usersRepository.findOne({
      where: { email } && { password },
    });
    return user;
  }
}
