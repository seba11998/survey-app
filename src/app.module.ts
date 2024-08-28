import { Module } from '@nestjs/common';
import { SurveyModule } from './modules/survey/survey.module';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [SurveyModule, DatabaseModule],
})
export class AppModule {}
