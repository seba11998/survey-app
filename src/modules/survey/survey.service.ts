import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SurveyEntity } from './survey.entity';
import { isEmail } from 'class-validator';

interface SurveyWithOtroEstilo extends SurveyEntity {
  otroEstilo?: string;
}

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(SurveyEntity)
    private surveyRepository: Repository<SurveyEntity>,
  ) {}

  async create(survey: SurveyWithOtroEstilo): Promise<SurveyEntity> {
    if (!isEmail(survey.email)) {
      throw new HttpException('Invalid email format', HttpStatus.BAD_REQUEST);
    }

    if (survey.estiloMusical === 'Otro' && survey.otroEstilo) {
      survey.estiloMusical = survey.otroEstilo;
    }

    const emailExists = await this.surveyRepository.findOne({
      where: { email: survey.email },
    });
    if (emailExists) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
    return this.surveyRepository.save(survey);
  }

  async getAllResults(): Promise<any> {
    return this.surveyRepository
      .createQueryBuilder('encuesta_entity')
      .select('encuesta_entity.estiloMusical')
      .addSelect('COUNT(encuesta_entity.estiloMusical)', 'count')
      .groupBy('encuesta_entity.estiloMusical')
      .orderBy('count', 'DESC')
      .getRawMany();
  }
}
