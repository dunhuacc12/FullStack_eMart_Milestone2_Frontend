import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from '../../models/PurchaseHistory';
import { PurchaseHistoryService } from '../../services/purchaseHistory.service';

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

  constructor(private purchaseHistoryService: PurchaseHistoryService) { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {

    const userId = localStorage.getItem('userId');
    this.purchaseHistoryService.getPurchaseHistory(userId)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            this.purchaseHistoryList = info.data;
          } else {
            console.log('search faild');
          }
        }
      );
  }
}
