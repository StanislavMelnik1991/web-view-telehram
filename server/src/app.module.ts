import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { Settings } from './models/settings.entity';
import { Game } from './models/game.entity';
import { Card } from './models/card.entity';
import { Round } from './models/round.entity';
import { Step } from './models/step.entity';
import { AuthModule } from './auth/auth.module';
import { StatisticModule } from './statistic/statistic.module';

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
      entities: [User, Settings, Game, Card, Round, Step],
      synchronize: true,
    }),
    AuthModule,
    StatisticModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
