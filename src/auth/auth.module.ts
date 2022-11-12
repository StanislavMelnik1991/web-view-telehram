import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'PRIVATE_KEY',
      signOptions: { expiresIn: '24h' },
    }),
    FilesModule,
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
