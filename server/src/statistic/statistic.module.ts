import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Round } from 'src/round/round.entity';
import { Game } from 'src/game/game.entity';
import { Card } from 'src/card/card.entity';
import { Settings } from 'src/game-settings/settings.entity';

@Module({
  controllers: [StatisticController],
  providers: [StatisticService],
  imports: [TypeOrmModule.forFeature([User, Round, Game, Card, Settings])],
})
export class StatisticModule {}
