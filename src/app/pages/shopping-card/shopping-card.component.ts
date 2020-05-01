import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { ShoppingList } from '../../models/ShoppingList';
import { ShoppingListItem } from '../../models/ShoppingListItem';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

const TAX_RATE = 0.1;
const SHOPPING_LIST: ShoppingList = {
  products: [
    {
      itemId: '1',
      imgUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png.webp',
      itemName: 'vivo X30 pro',
      price: 500,
      no: 1
    },
    {
      itemId: '2',
      imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38153b7ed552c6f42d88732a8e95b9fc.jpg?w=800&h=532',
      itemName: 'Xiaomi Mi Note 10 Pro',
      price: 550,
      no: 1
    },
    {
      itemId: '3',
      imgUrl: 'https://2d.zol-img.com.cn/product/204_400x300/581/ceeHsI0R2muyU.jpg',
      itemName: 'HUAWEI P40 Pro',
      price: 600,
      no: 1
    }
  ],
  totalPrice: 0,
  tax: 0,
  discount: 0,
};

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  shoppingList: ShoppingList;
  checkoutProducts: ShoppingListItem[];

  constructor(private shoppingCartService: ShoppingCartService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    // TODO Send the request when the microservice is completed
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.shoppingCartService.getShoppingList(userId)
    //   )
    // ).subscribe(items => this.shoppingList = items as ShoppingList);
    this.shoppingList = SHOPPING_LIST;
    this.calculate();
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
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

  /** when "+" button click */
  reduceNo(shoppingListItem) {
    if (shoppingListItem.no > 0) {
      shoppingListItem.no--;
      this.calculate();
    }
  }

  /** when "-" button click */
  addNo(shoppingListItem) {
    shoppingListItem.no++;
    this.calculate();
  }

  calculate() {
    let totalAmt = 0;
    this.shoppingList.products.forEach(item => {
      totalAmt += (item.price * item.no);
    });
    this.shoppingList.tax = totalAmt * TAX_RATE;
    this.shoppingList.totalPrice = totalAmt + this.shoppingList.tax - this.shoppingList.discount;
  }

  /* when Apply Discount button click */
  applyDiscount() {
    //  TODO Send the request when the microservice is completed
    this.shoppingList.discount = -50;
    this.calculate();
  }

  /* when checkout button click */
  checkout(content) {
    //  TODO Send the request when the microservice is completed
    this.open(content);
  }
}
