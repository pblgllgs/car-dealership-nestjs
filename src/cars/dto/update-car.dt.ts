import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}
