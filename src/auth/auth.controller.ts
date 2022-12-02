import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AuthService } from './auth.service';
import { CreateUserDTO, LoginUserDTO } from './dto/user.dto';

@ApiTags('Authorization')
@Controller('api/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'create user' })
  @ApiResponse({ status: 200, description: 'token' })
  @FormDataRequest()
  @UsePipes(ValidationPipe)
  @Post('signup')
  registration(@Body() dto: CreateUserDTO) {
    return this.authService.createNewUser(dto);
  }

  @ApiOperation({ summary: 'login user' })
  @ApiResponse({ status: 200, description: 'token' })
  @UsePipes(ValidationPipe)
  @Post('/signin')
  login(@Body() dto: LoginUserDTO) {
    return this.authService.login(dto);
  }
}
