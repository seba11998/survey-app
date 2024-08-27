import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultadosRepository } from './resultados.repository';

@Injectable()
export class ResultadosService {
  constructor(
    @InjectRepository(ResultadosRepository)
    private readonly resultadosRepository: ResultadosRepository,
  ) {}

  async getAllResults(): Promise<any[]> {
    return this.resultadosRepository.findAllResults();
  }
}
