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
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get('/:id')
  getOneProduct(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN }),
    )
    id: string,
  ): Promise<Product> {
    return this.productsService.getOne(id);
  }

  @Put('/')
  updateProduct(@Body() updateProduct: UpdateProductDto): Promise<Product> {
    return this.productsService.update(updateProduct);
  }

  @Delete('/:id')
  removeProduct(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN }),
    )
    id: string,
  ): Promise<Product> {
    return this.productsService.remove(id);
  }
}
