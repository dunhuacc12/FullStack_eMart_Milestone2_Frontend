import { MyStoreListItem } from './MyStoreListItem';

export interface MyStore {
  userId: string;
  storeName: string;
  products: MyStoreListItem[];
}
