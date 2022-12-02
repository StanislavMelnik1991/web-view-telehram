import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FilesModule } from 'src/files/files.module';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    FilesModule,
    UserModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: { expiresIn: '24h' },
    }),
    NestjsFormDataModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
