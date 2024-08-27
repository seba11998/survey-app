import { Module } from '@nestjs/common';
import { SurveyModule } from './modules/survey/survey.module';
import { ResultsModule } from './modules/results/results.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [SurveyModule, ResultsModule, DatabaseModule],
})
export class AppModule {}
