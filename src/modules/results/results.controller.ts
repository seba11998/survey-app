import { Controller, Get } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultadosService: ResultsService) {}

  @Get()
  async getAllResults() {
    return this.resultadosService.getAllResults();
  }
}
