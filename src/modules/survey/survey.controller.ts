import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyEntity } from './survey.entity';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @Post()
  async create(@Body() survey: SurveyEntity) {
    try {
      return await this.surveyService.create(survey);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('results')
  async getAllResults() {
    return this.surveyService.getAllResults();
  }
}
