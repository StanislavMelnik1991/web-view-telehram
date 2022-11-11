import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { CreateRoleDto, CreateUserRoleDto } from './types';
import { Role } from './role.entity';
import { UserRole } from './userRole.entity';
import { ROLE } from './constants';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(UserRole)
    private usersRoleRepository: Repository<UserRole>,
  ) {}

  async createRole(newRole: CreateRoleDto) {
    try {
      const role = this.roleRepository.create(newRole);
      await this.roleRepository.save(role);
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
  async createUserRole({ roleId, id }: CreateUserRoleDto) {
    try {
      const newRole = this.usersRoleRepository.create({
        role: roleId,
        user: id,
      });
      await this.usersRoleRepository.save(newRole);
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
}
