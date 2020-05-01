import { Component, OnInit } from '@angular/core';
import { MyStore } from '../../models/MyStore';
import { MyStoreListItem } from '../../models/MyStoreListItem';
import { MyStoreService } from '../../services/mystore.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

const MYSTORE_INFO: MyStore = {
  userId: '1',
  storeName: 'vivo mobile store',
  products: [
    {
      itemId: '1',
      imgUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png.webp',
      itemName: 'vivo X30 pro',
      price: 500,
      status: 'On Sell',
      stock_number: 50
    },
    {
      itemId: '2',
      imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38153b7ed552c6f42d88732a8e95b9fc.jpg?w=800&h=532',
      itemName: 'Xiaomi Mi Note 10 Pro',
      price: 550,
      status: 'On Sell',
      stock_number: 60
    },
    {
      itemId: '3',
      imgUrl: 'https://2d.zol-img.com.cn/product/204_400x300/581/ceeHsI0R2muyU.jpg',
      itemName: 'HUAWEI P40 Pro',
      price: 600,
      status: 'On Sell',
      stock_number: 70
    }
  ]
};

@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent implements OnInit {

  myStore: MyStore;

  numberOfStock: string;
  closeResult: string;

  constructor(private myStoreService: MyStoreService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    // TODO Send the request when the microservice is completed
    // this.myStoreService.getMyStoreInfo(userId).subscribe(items => this.myStore = items as MyStore);
    this.myStore = MYSTORE_INFO;
  }

  update(product: MyStoreListItem) {

  }

  report() {
    this.router.navigate(['/seller-report']);
  }

  addItem() {
    this.router.navigate(['/addItem']);
  }

  open(content, product) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      product.stock_number = result;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
