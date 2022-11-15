import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface, RemoveProductResponse } from '../types/product';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductsService) private readonly productsService: ProductsService,
  ) {}

  @Post('/')
  createProduct(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product);
  }

  @Get('/')
  getAll(): Promise<ProductInterface[]> {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getOne(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN }),
    )
    id: string,
  ): Promise<ProductInterface> {
    return this.productsService.getOne(id);
  }

  @Put('/')
  update(@Body() updateProduct: UpdateProductDto): Promise<ProductInterface> {
    return this.productsService.update(updateProduct);
  }

  @Delete('/:id')
  remove(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN }),
    )
    id: string,
  ): Promise<RemoveProductResponse> {
    return this.productsService.remove(id);
  }
}
