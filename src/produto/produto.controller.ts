import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateProdutoDto } from './Dto/create-produto-dto';
import { UpdateProdutoDto } from './Dto/update-produto-dto';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}
  //Retorna todos os produtos
  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  //Retorna o produto por ID
  @Get(':id')
  findId(@Param('id') id: number) {
    return this.produtoService.findId(id);
  }

  //Grava os produtos
  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }

  //Atualiza os produtos
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(id, updateProdutoDto);
  }

  //Retorna o produto por ID
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.produtoService.remove(id);
  }
}
