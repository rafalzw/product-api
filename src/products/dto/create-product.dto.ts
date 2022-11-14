import { ProductInterface } from '../../types/product';
import { IsNotEmpty, IsNumber, IsString, NotEquals } from 'class-validator';

export class CreateProductDto implements ProductInterface {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @NotEquals(0)
  price: number;
}
