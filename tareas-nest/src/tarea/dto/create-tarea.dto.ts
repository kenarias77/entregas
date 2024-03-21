import { IsString, MinLength, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateTareaDto {
    @IsString({message: "El nombre debe ser un texto"})
    @MinLength(3, {message: "El nombre debe contener al menos 3 letras"})
    readonly nombre: string;

    @IsNotEmpty({message:"La prioridad es obligatoria"})
    @IsInt({message: "La prioridad debe ser un número entero"})
    @Min(0, {message:"La prioridad minima es 1"})
    @Max(120, {message: "La prioridad maxima es 5"})
    readonly prioridad: number;

    @IsNotEmpty({message:"la fecha es obligatoria"})
    readonly fecha: Date;
}
