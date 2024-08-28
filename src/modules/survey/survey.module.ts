import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyEntity } from './survey.entity';
import { SurveyRepository } from './survey.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity, SurveyRepository])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
