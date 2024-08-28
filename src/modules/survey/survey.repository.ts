import { EntityRepository, Repository } from 'typeorm';
import { SurveyEntity } from './survey.entity';

@EntityRepository(SurveyEntity)
export class SurveyRepository extends Repository<SurveyEntity> {}
