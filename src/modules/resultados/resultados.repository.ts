import { EntityRepository, Repository } from 'typeorm';
import { ResultadosEntity } from './resultados.entity';

@EntityRepository(ResultadosEntity)
export class ResultadosRepository extends Repository<ResultadosEntity> {
  // Custom methods
  async findAllResults(): Promise<ResultadosEntity[]> {
    return this.createQueryBuilder('encuesta_entity')
      .select('encuesta_entity.estiloMusical')
      .addSelect('COUNT(encuesta_entity.estiloMusical)', 'count')
      .groupBy('encuesta_entity.estiloMusical')
      .orderBy('count', 'DESC')
      .getRawMany();
  }
}
