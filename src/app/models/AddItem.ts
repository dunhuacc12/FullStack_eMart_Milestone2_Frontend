import { Description } from './Description';

export interface AddItem {
  userId: string;
  categoryValue: number;
  categoryLabel: string;
  subcategoryValue: number;
  subcategoryLabel: string;
  itemName: string;
  price: number;
  stockNumber: number;
  descriptions: Description[];
}
