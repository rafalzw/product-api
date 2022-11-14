import { ProductInterface } from '../../types/product';

export class UpdateProductDto implements ProductInterface {
  id: string;
  name: string;
  price: number;
}
