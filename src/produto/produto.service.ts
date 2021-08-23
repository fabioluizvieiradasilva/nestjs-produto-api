import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './Dto/create-produto-dto';
import { UpdateProdutoDto } from './Dto/update-produto-dto';
import { Produto } from './entities/produto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
  ) {}

  findAll() {
    return this.produtoRepository.find();
  }

  findId(id: number) {
    const produto = this.produtoRepository.findOne(id);

    if (!produto) {
      throw new NotFoundException(`Produto ID ${id}, não encontrado!`);
    }
    return produto;
  }

  create(createProdutoDto: CreateProdutoDto) {
    const produto = this.produtoRepository.create(createProdutoDto);
    return this.produtoRepository.save(produto);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produto = await this.produtoRepository.preload({
      id: id,
      ...updateProdutoDto,
    });

    if (!produto) {
      throw new NotFoundException(`Produto de ID ${id} não foi encontrado!`);
    }

    return this.produtoRepository.save(produto);
  }

  async remove(id: number) {
    const produto = await this.produtoRepository.findOne(id);
    if (!produto) {
      throw new NotFoundException(`Produto de ID ${id} não foi encontrado!`);
    }

    return this.produtoRepository.remove(produto);
  }
}
