import { Body, Controller, Inject, Post } from '@nestjs/common';
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
}
