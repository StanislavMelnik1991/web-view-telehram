import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesModule } from 'src/files/files.module';
import { GameSettingsModule } from 'src/game-settings/game-settings.module';
import { Card } from './cards.entity';
import { CardsService } from './cards.service';

@Module({
  providers: [CardsService],
  imports: [TypeOrmModule.forFeature([Card]), GameSettingsModule, FilesModule],
})
export class CardsModule {}
