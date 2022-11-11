import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from 'src/user/dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDto) {
    const candidate = await this.userService.getUserByEmail(dto.email);
    if (candidate) {
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.createNewUser({
      ...dto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async signIn(dto: SignInDto) {
    const user: User = await this.validateUser(dto);
    return this.generateToken(user);
  }

  private async generateToken({ email, id, roles }: User) {
    const payload = { email, id, roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser({ email, password }: SignInDto) {
    try {
      const user = await this.userService.getUserByEmail(email);
      const passwordEquals = await bcrypt.compare(password, user.password);
      if (!passwordEquals) {
        throw new NotFoundException({ message: 'user not found' });
      }
      return user;
    } catch (e) {
      throw new NotFoundException({ message: 'user not found' });
    }
  }
}
