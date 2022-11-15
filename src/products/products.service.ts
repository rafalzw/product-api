import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { RemoveProductResponse } from '../types/product';
import { Product } from './product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  async create(product: CreateProductDto): Promise<Product> {
    const { name, price } = product;
    const newProduct = new Product();

    newProduct.name = name;
    newProduct.price = price;

    await newProduct.save();

    return newProduct;
  }

  async getAll(): Promise<Product[]> {
    return await Product.find();
  }

  async getOne(id: string): Promise<Product> {
    const product = await Product.findOne({ where: { id } });

    if (!product) {
      throw new HttpException('Product not found!', HttpStatus.BAD_REQUEST);
    }
    return product;
  }

  async update(updateProduct: UpdateProductDto): Promise<Product> {
    const { id, name, price } = updateProduct;
    const updatedProduct = await this.getOne(id);

    updatedProduct.name = name;
    updatedProduct.price = price;
    updatedProduct.updateDate = new Date();

    await updatedProduct.save();

    return updatedProduct;
  }

  async remove(id: string): Promise<RemoveProductResponse> {
    const findProduct = await this.getOne(id);

    await findProduct.remove();

    return { isSuccess: true };
  }
}
