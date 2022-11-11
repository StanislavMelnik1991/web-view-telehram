import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Settings } from './game-settings/settings.entity';
import { Game } from './game/game.entity';
import { Card } from './card/card.entity';
import { Round } from './round/round.entity';
import { Step } from './step/step.entity';
import { UserModule } from './user/user.module';
import { StatisticModule } from './statistic/statistic.module';
import { CardModule } from './card/card.module';
import { GameModule } from './game/game.module';
import { RoundModule } from './round/round.module';
import { GameSettingsModule } from './game-settings/game-settings.module';
import { StepModule } from './step/step.module';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.entity';
import { UserRole } from './role/userRole.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_NAME,
      logging: true,
      entities: [User, Settings, Game, Card, Round, Step, Role, UserRole],
      synchronize: true,
    }),
    UserModule,
    StatisticModule,
    CardModule,
    GameModule,
    RoundModule,
    GameSettingsModule,
    StepModule,
    RoleModule,
  ],
})
export class AppModule {}