import { EntityRepository, Repository } from 'typeorm';
import { SurveyEntity } from './survey.entity';

@EntityRepository(SurveyEntity)
export class SurveyRepository extends Repository<SurveyEntity> {
  async findPopularStyles(): Promise<any[]> {
    return this.createQueryBuilder('encuesta_entity')
      .select('encuesta_entity.estiloMusical')
      .addSelect('COUNT(encuesta_entity.estiloMusical)', 'count')
      .groupBy('encuesta_entity.estiloMusical')
      .orderBy('count', 'DESC')
      .getRawMany();
  }
}
