import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactoModule } from './contacto/contacto.module';
import { TareaModule } from './tarea/tarea.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module ({
    imports: [ContactoModule,
      TareaModule,
      MongooseModule.forRoot('mongodb://127.0.0.1/contactos')],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}