import { IsString, MinLength, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateContactoDto {
    @IsString({message: "El nombre debe ser un texto"})
    @MinLength(3, {message: "El nombre debe contener al menos 3 letras"})
    readonly nombre: string;

    @IsNotEmpty({message:"La edad es obligatoria"})
    @IsInt({message: "La edad debe ser un número entero"})
    @Min(0, {message:"La edad mínima es 0"})
    @Max(120, {message: "La edad máxima es 120"})
    readonly edad: number;

    readonly telefono: string;
}
