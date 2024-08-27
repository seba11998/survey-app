import { EntityRepository, Repository } from 'typeorm';
import { EncuestaEntity } from './encuesta.entity';

@EntityRepository(EncuestaEntity)
export class EncuestaRepository extends Repository<EncuestaEntity> {
  // Custom methods
  async findPopularStyles(): Promise<any[]> {
    return this.createQueryBuilder('encuesta_entity')
      .select('encuesta_entity.estiloMusical')
      .addSelect('COUNT(encuesta_entity.estiloMusical)', 'count')
      .groupBy('encuesta_entity.estiloMusical')
      .orderBy('count', 'DESC')
      .getRawMany();
  }
}
