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
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(ProductsService) private readonly productsService: ProductsService,
  ) {}

  @Post('/')
  @ApiCreatedResponse({ description: 'Create Product' })
  createProduct(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product);
  }

  @Get('/')
  @ApiOkResponse({ description: 'List of Products' })
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'One Product Details' })
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
  @ApiOkResponse({ description: 'Updated Product' })
  updateProduct(@Body() updateProduct: UpdateProductDto): Promise<Product> {
    return this.productsService.update(updateProduct);
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'Removed Product' })
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
