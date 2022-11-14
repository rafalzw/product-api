import { ProductInterface } from '../../types/product';

export class CreateProductDto implements ProductInterface {
  name: string;
  price: number;
}
