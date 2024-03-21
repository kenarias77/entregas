import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { tareaSchema } from './entities/tarea.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ 
        // También podemos usar Contacto.name
        // pero debemos tener cuidado con el plural
        name: 'tareas', 
        schema: tareaSchema 
    }])
  ],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
