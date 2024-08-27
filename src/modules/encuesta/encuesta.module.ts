import { Module } from '@nestjs/common';
import { EncuestaController } from './encuesta.controller';
import { EncuestaService } from './encuesta.service';
import { EncuestaEntity } from './encuesta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EncuestaEntity])],
  controllers: [EncuestaController],
  providers: [EncuestaService],
})
export class EncuestaModule {}
