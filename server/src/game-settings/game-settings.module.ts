import { Module } from '@nestjs/common';
import { GameSettingsService } from './game-settings.service';
import { GameSettingsController } from './game-settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Settings } from './settings.entity';

@Module({
  providers: [GameSettingsService],
  controllers: [GameSettingsController],
  imports: [TypeOrmModule.forFeature([Settings])],
  exports: [GameSettingsService],
})
export class GameSettingsModule {}
