import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ResponseCarDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly brand: string;

  @IsString()
  @IsNotEmpty()
  readonly model: string;
}
