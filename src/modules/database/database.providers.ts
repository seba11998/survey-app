import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from '../survey/survey.entity';
import { SurveyRepository } from '../survey/survey.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity])],
  providers: [SurveyRepository],
  exports: [SurveyRepository],
})
export class DatabaseModule {}
