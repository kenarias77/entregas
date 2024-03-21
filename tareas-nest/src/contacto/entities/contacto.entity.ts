import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contacto extends Document {

    @Prop({
        required: true,
        minlength: 5
    })
    nombre: string;

    @Prop({
        required: true,
        min: 0,
        max: 120
    })
    edad: number;

    telefono: string;

}

export const ContactoSchema = SchemaFactory.createForClass(Contacto);