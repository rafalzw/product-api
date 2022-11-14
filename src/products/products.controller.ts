import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from '../types/product';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductsService) private readonly productsService: ProductsService,
  ) {}

  @Post('/')
  create(@Body() product: CreateProductDto): Promise<ProductInterface> {
    return this.productsService.create(product);
  }

  @Get('/')
  getAll(): Promise<ProductInterface[]> {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Promise<ProductInterface> {
    return this.productsService.getOne(id);
  }
}
