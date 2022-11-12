import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [CardService],
  controllers: [CardController],
  imports: [TypeOrmModule.forFeature([Card]), FilesModule],
  exports: [CardService],
})
export class CardModule {}
