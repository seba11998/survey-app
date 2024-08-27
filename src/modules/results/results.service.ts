import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResultsRepository } from './results.repository';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(ResultsRepository)
    private readonly resultadosRepository: ResultsRepository,
  ) {}

  async getAllResults(): Promise<any[]> {
    return this.resultadosRepository.findAllResults();
  }
}
