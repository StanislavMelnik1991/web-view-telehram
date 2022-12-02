import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersInGameService } from './users-in-game.service';
import { UsersInGame } from './usersInGame.entity';

@Module({
  providers: [UsersInGameService],
  imports: [TypeOrmModule.forFeature([UsersInGame]), JwtModule, AuthModule],
  exports: [UsersInGameService],
})
export class UsersInGameModule {}
