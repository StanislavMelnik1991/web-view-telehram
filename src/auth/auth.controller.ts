import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from 'src/user/dto/createUser.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, description: 'token: string' })
  @Post('signup')
  signUp(@Body() dto: SignUpDto) {
    const user = this.authService.signUp(dto);
    return user;
  }

  @ApiOperation({ summary: 'user login' })
  @ApiResponse({ status: 200, description: 'token: string' })
  @Post('signin')
  signIn(@Body() dto: SignUpDto) {
    const user = this.authService.signIn(dto);
    return user;
  }
}
