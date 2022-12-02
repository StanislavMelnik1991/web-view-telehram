import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DIFFICULTY } from 'src/constants/game.constants';
import { Repository } from 'typeorm';
import { Settings } from './settings.entity';

@Injectable()
export class GameSettingsService {
  constructor(
    @InjectRepository(Settings)
    private settingsRepository: Repository<Settings>,
  ) {}

  async createSetting(difficulty: DIFFICULTY) {
    const settings = this.settingsRepository.create({ difficulty });
    await this.settingsRepository.save(settings);
    return settings;
  }

  async findSettingByDifficulty(difficulty: DIFFICULTY) {
    const settings = await this.settingsRepository.findOneBy({ difficulty });
    return settings;
  }
}
