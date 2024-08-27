import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { SurveyEntity } from './survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
