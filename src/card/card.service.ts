import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilesService } from 'src/files/files.service';
import { Repository } from 'typeorm';
import { Card } from './card.entity';
import { CreateCardDto } from './dto/card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private fileService: FilesService,
  ) {}

  async createCard({ id, img, name }: CreateCardDto) {
    const fileName = await this.fileService.createFile(img);
    const card = this.cardRepository.create({
      setting: id,
      img: fileName,
      name,
    });
    const newCard = await this.cardRepository.save(card);
    return newCard;
  }

  async getCard(id: number) {
    const card = await this.cardRepository.findOne({
      where: { id },
      relations: { setting: true },
    });
    return card;
  }
  async getAllCards(id: number) {
    const cards = await this.cardRepository.find({
      where: { setting: id },
      relations: { setting: true },
    });
    return cards;
  }
}
