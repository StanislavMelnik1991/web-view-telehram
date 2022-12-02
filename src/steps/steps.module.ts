import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Step } from 'src/steps/step.entity';
import { StepsService } from './steps.service';

@Module({
  providers: [StepsService],
  imports: [TypeOrmModule.forFeature([Step])],
})
export class StepsModule {}
