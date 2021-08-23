import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    ProdutoModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'produtos.db',
      //entities: ['/src/produto/entities/*.ts'],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
