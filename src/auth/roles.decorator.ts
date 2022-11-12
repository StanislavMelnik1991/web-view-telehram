import { SetMetadata } from '@nestjs/common';
import { ROLE } from 'src/role/role.constants';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ROLE[]) => SetMetadata('roles', roles);
