import { EntityRepository, Repository } from 'typeorm';
import { ResultsEntity } from './results.entity';

@EntityRepository(ResultsEntity)
export class ResultsRepository extends Repository<ResultsEntity> {
  async findAllResults(): Promise<ResultsEntity[]> {
    return this.createQueryBuilder('encuesta_entity')
      .select('encuesta_entity.estiloMusical')
      .addSelect('COUNT(encuesta_entity.estiloMusical)', 'count')
      .groupBy('encuesta_entity.estiloMusical')
      .orderBy('count', 'DESC')
      .getRawMany();
  }
}
