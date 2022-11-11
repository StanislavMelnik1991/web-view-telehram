import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { ROLE } from 'src/role/constants';
import { Role } from 'src/role/role.entity';
import { User } from 'src/user/user.entity';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<Array<string>>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );
      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const [type, token] = req.headers.authorization.split(' ');
      if (type !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'unauthorized user' });
      }
      const user: User = this.jwtService.verify(token);
      req.user = user;
      const findSuperAmin = user.roles.find(
        (role) => role.role === ROLE.SUPER_ADMIN,
      );
      if (findSuperAmin) {
        return true;
      }
      return user.roles.some((role) => requiredRoles.includes(role.role));
    } catch (e) {
      throw new UnauthorizedException({ message: 'unauthorized user' });
    }
  }
}
