import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EncuestaEntity } from './encuesta.entity';

@Injectable()
export class EncuestaService {
  constructor(
    @InjectRepository(EncuestaEntity)
    private encuestaRepository: Repository<EncuestaEntity>,
  ) {}

  async create(encuesta: EncuestaEntity): Promise<EncuestaEntity> {
    return this.encuestaRepository.save(encuesta);
  }

  async findAndCountAll(): Promise<[EncuestaEntity[], number]> {
    return this.encuestaRepository.findAndCount();
  }
}
