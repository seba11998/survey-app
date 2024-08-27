// survey.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyEntity } from './survey.entity';

@Controller('encuestas')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async create(@Body() survey: SurveyEntity) {
    return this.surveyService.create(survey);
  }
}
