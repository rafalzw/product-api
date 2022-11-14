export interface ProductInterface {
  id?: string;
  name: string;
  price: number;
  updateDate?: Date;
}

export type RemoveProductResponse = {
  isSuccess: boolean;
};
