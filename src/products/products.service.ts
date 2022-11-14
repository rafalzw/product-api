import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface } from '../types/product';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  async create(product: CreateProductDto): Promise<ProductInterface> {
    const { name, price } = product;
    const newProduct = new Product();

    newProduct.name = name;
    newProduct.price = price;

    await newProduct.save();

    return newProduct;
  }

  async findAll() {
    return await Product.find();
  }
}
