import { Body, Controller, Get, Post } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyEntity } from './survey.entity';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async create(@Body() survey: SurveyEntity) {
    return this.surveyService.create(survey);
  }

  @Get('results')
  async getAllResults() {
    return this.surveyService.getAllResults();
  }
}
