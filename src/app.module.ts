import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { EncuestaModule } from './modules/encuesta/encuesta.module';
import { ResultadosModule } from './modules/resultados/resultados.module';
import { DatabaseModule } from './modules/database/database.module';
@Module({
  imports: [EncuestaModule,ResultadosModule, DatabaseModule],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}