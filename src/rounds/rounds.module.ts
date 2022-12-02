import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersInGameModule } from 'src/users-in-game/users-in-game.module';
import { Round } from './round.entity';
import { RoundsService } from './rounds.service';

@Module({
  providers: [RoundsService],
  imports: [TypeOrmModule.forFeature([Round]), UsersInGameModule],
})
export class RoundsModule {}
