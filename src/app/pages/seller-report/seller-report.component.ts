import { Component, OnInit } from '@angular/core';
import { SellerReportListItem } from '../../models/SellerReportListItem';

const SELLER_REPORT_LIST: SellerReportListItem[] = [
  {
    itemId: '1',
    itemName: 'vivo X30 pro',
    imgUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png.webp',
    numberofSales: 2,
    totalAmount: 1000
  },
  {
    itemId: '2',
    imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38153b7ed552c6f42d88732a8e95b9fc.jpg?w=800&h=532',
    itemName: 'Xiaomi Mi Note 10 Pro',
    numberofSales: 3,
    totalAmount: 1500
  },
  {
    itemId: '3',
    imgUrl: 'https://2d.zol-img.com.cn/product/204_400x300/581/ceeHsI0R2muyU.jpg',
    itemName: 'HUAWEI P40 Pro',
    numberofSales: 4,
    totalAmount: 2000
  }
];

@Component({
  selector: 'app-seller-report',
  templateUrl: './seller-report.component.html',
  styleUrls: ['./seller-report.component.css']
})
export class SellerReportComponent implements OnInit {

  sellerReportList: SellerReportListItem[];

  constructor() { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    // TODO Send the request when the microservice is completed
    this.sellerReportList = SELLER_REPORT_LIST;
  }

  onView() {
    // TODO Send the request when the microservice is completed
  }
}
