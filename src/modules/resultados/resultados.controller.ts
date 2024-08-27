import { Controller, Get } from '@nestjs/common';
import { ResultadosService } from './resultados.service';

@Controller('resultados')
export class ResultadosController {
  constructor(private readonly resultadosService: ResultadosService) {}

  @Get()
  async getAllResults() {
    return this.resultadosService.getAllResults();
  }
}
