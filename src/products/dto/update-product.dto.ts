import { ProductInterface } from '../../types/product';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto implements ProductInterface {
  @IsNotEmpty()
  @IsUUID(4, { each: true })
  @ApiProperty()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  price: number;
}
