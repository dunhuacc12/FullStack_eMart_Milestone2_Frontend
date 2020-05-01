import { ShoppingListItem } from './ShoppingListItem';

export interface PurchaseHistory extends ShoppingListItem {
  purchaseDate: Date;
}
