import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardDto, GetCardDto } from './types';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async createCard({ settingsId, img, name }: CreateCardDto) {
    const card = this.cardRepository.create({ setting: settingsId, img, name });
    const { id } = await this.cardRepository.save(card);
    return id;
  }

  async getCard({ id }: GetCardDto) {
    const card = await this.cardRepository.findOne({
      where: { id },
      relations: { setting: true },
    });
    return card;
  }
  async getAllCards({ id }: GetCardDto) {
    const cards = await this.cardRepository.find({
      where: { setting: id },
      relations: { setting: true },
    });
    return cards;
  }
}
