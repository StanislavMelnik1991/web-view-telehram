import { Controller, UseGuards, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { UserService } from './user.service';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLE } from 'src/role/constants';

@ApiTags('User')
@Controller('api/v1/user')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles(ROLE.ADMIN, ROLE.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    const users = this.userService.getAllUser();
    return users;
  }
}
