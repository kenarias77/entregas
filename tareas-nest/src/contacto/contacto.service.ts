import { Injectable } from '@nestjs/common';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Contacto } from './entities/contacto.entity';

@Injectable()
export class ContactoService {
  constructor(@InjectModel('contactos') 
        private readonly contactoModel: Model<Contacto>) {}

        async create(createContactoDto: CreateContactoDto) {
          const nuevoContacto = await 
              this.contactoModel.create(createContactoDto);
          return nuevoContacto;
      }
  findAll() {
    return `This action returns all contacto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contacto`;
  }

  update(id: number, updateContactoDto: UpdateContactoDto) {
    return `This action updates a #${id} contacto`;
  }

  remove(id: number) {
    return `This action removes a #${id} contacto`;
  }
}
