import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInterface } from '../types/product';

@Entity()
export class Product extends BaseEntity implements ProductInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    type: 'float',
    precision: 9,
    scale: 2,
  })
  price: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateDate: Date;
}
