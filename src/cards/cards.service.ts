import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { GameSettingsService } from 'src/game-settings/game-settings.service';
import { Repository } from 'typeorm';
import { Card } from './cards.entity';
import { CreateGame } from './types/cards.types';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private settingsService: GameSettingsService,
    private filesService: FilesService,
  ) {}

  async createCard({ difficulty, img, title }: CreateGame) {
    const image = await this.filesService.createImage({
      file: img,
      path: 'card',
    });

    const settings = await this.settingsService.findSettingByDifficulty(
      difficulty,
    );
    if (!settings) {
      throw new HttpException('settings not found', HttpStatus.BAD_REQUEST);
    }
    const card = this.cardRepository.create({
      title,
      img: image,
      settings: settings.id,
    });
    await this.cardRepository.save(card);
    return card;
  }
}
