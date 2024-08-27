import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyEntity } from './survey.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyEntity)
    private surveyRepository: Repository<SurveyEntity>,
  ) {}

  async create(survey: SurveyEntity): Promise<SurveyEntity> {
    const emailExists = await this.surveyRepository.findOne({
      where: { email: survey.email },
    });
    if (emailExists) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
    return this.surveyRepository.save(survey);
  }

  async findAndCountAll(): Promise<[SurveyEntity[], number]> {
    return this.surveyRepository.findAndCount();
  }
}
