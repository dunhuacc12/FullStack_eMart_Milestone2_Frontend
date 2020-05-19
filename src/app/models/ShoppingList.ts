import { ShoppingListItem } from './ShoppingListItem';

export interface ShoppingList {
  products: ShoppingListItem[];
  totalPrice: number;
  tax: number;
  discount: number;
  discountId: number;
  userId: string;
}
