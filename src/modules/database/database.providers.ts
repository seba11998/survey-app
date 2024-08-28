import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyEntity } from '../survey/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyEntity])],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
