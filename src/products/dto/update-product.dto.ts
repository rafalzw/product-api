import { ProductInterface } from '../../types/product';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  NotEquals,
} from 'class-validator';

export class UpdateProductDto implements ProductInterface {
  @IsNotEmpty()
  @IsUUID(4, { each: true })
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @NotEquals(0)
  price: number;
}
