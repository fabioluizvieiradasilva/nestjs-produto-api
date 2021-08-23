import { IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  readonly nome: string;
  @IsString()
  readonly descricao: string;
  @IsNumber()
  readonly valor: number;
  @IsNumber()
  readonly quantidade: number;
}
