import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'El campo brand debe ser un cadena de caracteres' })
  @IsNotEmpty({ message: 'El campo brand no puede ser vacio' })
  readonly brand: string;

  @IsString({ message: 'El campo model debe ser un cadena de caracteres' })
  @IsNotEmpty({ message: 'El campo model no puede ser vacio' })
  readonly model: string;
}
