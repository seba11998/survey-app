// resultados.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadosEntity } from './resultados.entity';
import { ResultadosRepository } from './resultados.repository';
import { ResultadosService } from './resultados.service';
import { ResultadosController } from './resultados.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResultadosEntity, ResultadosRepository])],
  controllers: [ResultadosController],
  providers: [ResultadosService],
  exports: [ResultadosService],
})
export class ResultadosModule {}
