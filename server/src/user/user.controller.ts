import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { UserService } from './user.service';
import { SignInDto, SignUpDto } from './dto';

@ApiTags('auth')
@Controller('api/v1/auth')
export class UserController {
  constructor(private userService: UserService) {}
  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, type: User })
  @Post('signup')
  signUp(@Body() dto: SignUpDto) {
    const user = this.userService.singUp(dto);
    return user;
  }

  @ApiOperation({ summary: 'user login' })
  @ApiResponse({ status: 200, type: User })
  @Post('signin')
  signIn(@Body() dto: SignInDto) {
    const user = this.userService.singIn(dto);
    return user;
  }
}
