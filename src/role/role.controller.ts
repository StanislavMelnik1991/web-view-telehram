import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleBody, CreateUserRoleBody } from './types';
import { RoleService } from './role.service';

@ApiTags('Role')
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
  @Post('/')
  createUserRole(
    @Body() { roleId }: CreateUserRoleBody,
    @Query('id') id: string,
  ) {
    this.roleService.createUserRole({ id: Number(id), roleId });
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
