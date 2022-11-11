import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './types';
import { Settings } from './settings.entity';

@Injectable()
export class GameSettingsService {
  constructor(
    @InjectRepository(Settings)
    private settingsRepository: Repository<Settings>,
  ) {}

  async createSetting({ difficulty }: CreateSettingDto) {
    const setting = this.settingsRepository.create({ difficulty });
    await this.settingsRepository.save(setting);
  }
  async findByDifficulty({ difficulty }: CreateSettingDto) {
    const setting = await this.settingsRepository.findOne({
      where: { difficulty },
    });
    return setting;
  }
}
