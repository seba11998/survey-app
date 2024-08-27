// encuesta.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EncuestaService } from './encuesta.service';
import { EncuestaEntity } from './encuesta.entity';

@Controller('encuestas')
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @Post()
  async create(@Body() encuesta: EncuestaEntity) {
    return this.encuestaService.create(encuesta);
  }

}
