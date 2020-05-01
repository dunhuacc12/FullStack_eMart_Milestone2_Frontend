import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from '../../models/PurchaseHistory';

const PURCHASE_HISTORY_LIST: PurchaseHistory[] = [
  {
    itemId: '1',
    imgUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png.webp',
    itemName: 'vivo X30 pro',
    price: 500,
    no: 1,
    purchaseDate: new Date(2019, 5, 1)
  },
  {
    itemId: '2',
    imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38153b7ed552c6f42d88732a8e95b9fc.jpg?w=800&h=532',
    itemName: 'Xiaomi Mi Note 10 Pro',
    price: 550,
    no: 1,
    purchaseDate: new Date(2019, 5, 2)
  },
  {
    itemId: '3',
    imgUrl: 'https://2d.zol-img.com.cn/product/204_400x300/581/ceeHsI0R2muyU.jpg',
    itemName: 'HUAWEI P40 Pro',
    price: 600,
    no: 1,
    purchaseDate: new Date(2019, 5, 3)
  }
];

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  purchaseHistoryList: PurchaseHistory[];

  constructor() { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    // TODO Send the request when the microservice is completed
    this.purchaseHistoryList = PURCHASE_HISTORY_LIST;
  }

}
