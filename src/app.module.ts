import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { resolve } from 'path';
import { User } from './user/user.entity';
import { GameModule } from './game/game.module';
import { Card } from './cards/cards.entity';
import { Game } from './game/game.entity';
import { Round } from './rounds/round.entity';
import { Settings } from './game-settings/settings.entity';
import { Step } from './steps/step.entity';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { UserModule } from './user/user.module';
import { CardsModule } from './cards/cards.module';
import { RoundsModule } from './rounds/rounds.module';
import { StepsModule } from './steps/steps.module';
import { GameSettingsModule } from './game-settings/game-settings.module';
import { UsersInGame } from './users-in-game/usersInGame.entity';
import { UsersInGameModule } from './users-in-game/users-in-game.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      logging: true,
      entities: [Card, Game, Round, Settings, Step, User, UsersInGame],
      synchronize: true,
    }),
    GameModule,
    AuthModule,
    FilesModule,
    UserModule,
    CardsModule,
    RoundsModule,
    StepsModule,
    GameSettingsModule,
    UsersInGameModule,
  ],
})
export class AppModule {}
