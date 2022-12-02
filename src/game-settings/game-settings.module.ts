import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameSettingsService } from './game-settings.service';
import { Settings } from './settings.entity';

@Module({
  providers: [GameSettingsService],
  imports: [TypeOrmModule.forFeature([Settings])],
  exports: [GameSettingsService],
})
export class GameSettingsModule {}
