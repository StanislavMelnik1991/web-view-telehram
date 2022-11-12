import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';

import { Role } from './role.entity';
import { ROLE } from './role.constants';
import { CreateRoleDto } from './dto/createRole.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  async createRole(newRole: CreateRoleDto) {
    try {
      const role = this.roleRepository.create(newRole);
      await this.roleRepository.save(role);
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  async getRoles() {
    try {
      const roles = await this.roleRepository.findBy({
        role: Not(ROLE.SUPER_ADMIN),
      });
      return roles;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  async getRoleByRole(role: ROLE) {
    try {
      const result = await this.roleRepository.findOne({ where: { role } });
      return result;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
