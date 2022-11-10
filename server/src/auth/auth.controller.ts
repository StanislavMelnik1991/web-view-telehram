import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/models/user.entity';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, type: User })
  @Post('signup')
  signUp(@Body() dto: SignUpDto) {
    const user = this.authService.singUp(dto);
    return user;
  }

  @ApiOperation({ summary: 'user login' })
  @ApiResponse({ status: 200, type: User })
  @Post('signin')
  signIn(@Body() dto: SignInDto) {
    const user = this.authService.singIn(dto);
    return user;
  }
}
