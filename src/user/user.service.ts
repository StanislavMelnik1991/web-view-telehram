import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ROLE } from 'src/role/constants';
import { RoleService } from 'src/role/role.service';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleService: RoleService,
  ) {}

  async createNewUser(dto: SignUpDto) {
    const role = await this.roleService.getRoleByRole(ROLE.USER);
    let user = this.usersRepository.create({ ...dto, roles: [role] });
    user = await this.usersRepository.save(user);
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      relations: { roles: true },
    });
    return user;
  }
  async getAllUser() {
    const user = await this.usersRepository.find({
      relations: { roles: true },
    });
    return user;
  }
}
