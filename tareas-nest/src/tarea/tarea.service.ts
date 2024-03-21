import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareaService {
  constructor(@InjectModel('tareas') 
  private readonly tareaModel: Model<Tarea>) {}

  async create(createContactoDto: CreateTareaDto) {
    const nuevoContacto = await 
        this.tareaModel.create(createContactoDto);
    return nuevoContacto;
}
  findAll() {
    return `This action returns all tarea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return `This action updates a #${id} tarea`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarea`;
  }
}
