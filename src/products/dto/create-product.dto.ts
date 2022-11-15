import { ProductInterface } from '../../types/product';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto implements ProductInterface {
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
