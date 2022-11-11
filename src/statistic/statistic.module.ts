import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';
import { UserModule } from 'src/user/user.module';
import { RoundModule } from 'src/round/round.module';
import { GameModule } from 'src/game/game.module';
import { CardModule } from 'src/card/card.module';
import { GameSettingsModule } from 'src/game-settings/game-settings.module';

@Module({
  controllers: [StatisticController],
  providers: [StatisticService],
  imports: [
    UserModule,
    RoundModule,
    GameModule,
    CardModule,
    GameSettingsModule,
  ],
})
export class StatisticModule {}
