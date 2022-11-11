import { Body, Controller, Post, Param, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateRoleBody,
  CreateUserRoleBody,
  CreateUserRoleParams,
} from './types';
import { RoleService } from './role.service';

@ApiTags('role')
@Controller('api/v1/role')
export class RoleController {
  constructor(private roleService: RoleService) {}
  @ApiOperation({ summary: 'role creation' })
  @ApiResponse({ status: 200 })
  @Post('/')
  createRole(@Body() newRole: CreateRoleBody) {
    this.roleService.createRole(newRole);
    return 'ok';
  }

  @ApiOperation({ summary: 'user role creation' })
  @ApiResponse({ status: 200 })
  @Post('/{id}')
  createUserRole(
    @Body() { roleId }: CreateUserRoleBody,
    @Param() { id }: CreateUserRoleParams,
  ) {
    this.roleService.createUserRole({ roleId, id });
    return 'ok';
  }

  @ApiOperation({ summary: 'get all roles' })
  @ApiResponse({ status: 200 })
  @Get('/')
  getRoles() {
    const roles = this.roleService.getRoles();
    return roles;
  }
}
