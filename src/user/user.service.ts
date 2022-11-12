import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ROLE } from 'src/role/role.constants';
import { RoleService } from 'src/role/role.service';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { BecomeRoleDto } from './dto/addRole.dto';
import { BanUserDto } from './dto/ban.dto';
import { SignUpDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private roleService: RoleService,
  ) {}

  async createNewUser({ email, name, password }: SignUpDto) {
    const role = await this.roleService.getRoleByRole(ROLE.USER);
    let user = this.usersRepository.create({
      email: email.toLowerCase().trim(),
      name: name.toLowerCase().trim(),
      password,
      roles: [role],
    });
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

  async addRole({ id, role }: BecomeRoleDto) {
    // todo fix it!
    const newRole = await this.roleService.getRoleByRole(role);
    const user = await this.usersRepository
      .createQueryBuilder()
      .update({ roles: [newRole] })
      .where({ id })
      .returning('*')
      .execute();
    return user;
  }

  async banUser({ id, banReason, isBan }: BanUserDto) {
    const user = await this.usersRepository
      .createQueryBuilder()
      .update({ isBaned: isBan, banReason })
      .where({ id })
      .returning('*')
      .execute();
    return user;
  }
}
