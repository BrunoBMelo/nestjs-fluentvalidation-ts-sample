import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SampleAnyThing } from './entities/sample.entitie';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  var dominio = new SampleAnyThing(null,-1,null,-1,null,null);
  console.log(`Dominio valido:  ${dominio.DomainIsValid}`) 
  console.table(dominio.ErrorMessages)

}

bootstrap();