import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncuestaEntity } from '../encuesta/encuesta.entity';
import { EncuestaRepository } from '../encuesta/encuesta.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EncuestaEntity])],
  providers: [EncuestaRepository],
  exports: [EncuestaRepository],
})
export class DatabaseModule {}
