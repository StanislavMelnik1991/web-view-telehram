import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Step } from './step.entity';

@Injectable()
export class StepsService {
  constructor(
    @InjectRepository(Step)
    private roundRepository: Repository<Step>,
  ) {}
}
