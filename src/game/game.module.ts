import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { Game } from 'src/game/game.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [GameService],
  controllers: [GameController],
  imports: [TypeOrmModule.forFeature([Game]), JwtModule, AuthModule],
})
export class GameModule {}
