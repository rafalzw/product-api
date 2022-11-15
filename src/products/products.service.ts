import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInterface, RemoveProductResponse } from '../types/product';
import { Product } from './product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

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

  async getAll() {
    return await Product.find();
  }

  async getOne(id: string) {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      throw new HttpException('Product not found!', HttpStatus.BAD_REQUEST);
    }
    return product;
  }

  async update(updateProduct: UpdateProductDto) {
    const { id, name, price } = updateProduct;
    const product = await this.getOne(id);

    product.name = name;
    product.price = price;
    product.updateDate = new Date();

    await product.save();

    return product;
  }

  async remove(id: string): Promise<RemoveProductResponse> {
    const findProduct = await this.getOne(id);

    await findProduct.remove();

    return { isSuccess: true };
  }
}
