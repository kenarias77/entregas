import { Module } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { ContactoSchema } from './entities/contacto.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
        // También podemos usar Contacto.name
        // pero debemos tener cuidado con el plural
        name: 'contactos', 
        schema: ContactoSchema 
    }])
  ],
  controllers: [ContactoController],
  providers: [ContactoService],
})
export class ContactoModule {}
