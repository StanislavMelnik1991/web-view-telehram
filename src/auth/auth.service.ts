import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { FilesService } from 'src/files/files.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDTO, LoginUserDTO } from './dto/user.dto';
import { hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private fileService: FilesService,
    private jwtService: JwtService,
  ) {}

  async createNewUser({ avatar, email, name, password }: CreateUserDTO) {
    const duplicate = await this.usersService.findUserByEmail({ email });
    if (duplicate) {
      throw new HttpException(
        'user with this email already exist',
        HttpStatus.FORBIDDEN,
      );
    }
    const hashPassword = await hash(password, 5);
    const image = await this.fileService.createImage({
      file: avatar,
      path: 'avatar',
    });
    const user = await this.usersService.createUser({
      email,
      name,
      password: hashPassword,
      avatar: image,
    });
    return this.generateToken(user);
  }

  async login({ email }: LoginUserDTO) {
    const user = await this.usersService.findUserByEmail({ email });
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      role: user.role,
      email: user.email,
      name: user.name,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
