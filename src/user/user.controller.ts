import { Controller, UseGuards, Get, Post, Param, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { UserService } from './user.service';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ROLE } from 'src/role/constants';
import { BanUserBodyDto } from './dto';

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

  @Roles(ROLE.ADMIN, ROLE.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @Post('admin/:id')
  becomeAdmin(@Param('id') id: string) {
    const user = this.userService.becomeRole({
      role: ROLE.ADMIN,
      id: Number(id),
    });
    return user;
  }

  @Roles(ROLE.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  @Post('super/:id')
  becomeSuperAdmin(@Param('id') id: string) {
    const user = this.userService.becomeRole({
      role: ROLE.ADMIN,
      id: Number(id),
    });
    return user;
  }
  @Roles(ROLE.SUPER_ADMIN, ROLE.ADMIN)
  @UseGuards(RolesGuard)
  @Post('ban/:id')
  banUser(
    @Param('id') id: string,
    @Body() { isBan, banReason }: BanUserBodyDto,
  ) {
    const user = this.userService.banUser({
      banReason,
      isBan,
      id: Number(id),
    });
    return user;
  }
}
