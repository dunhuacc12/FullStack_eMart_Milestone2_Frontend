import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shoppingcart.service';
import { ShoppingList } from '../../models/ShoppingList';
import { ShoppingListItem } from '../../models/ShoppingListItem';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

const TAX_RATE = 0.1;

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  shoppingList: ShoppingList = {
    products: [
    ],
    totalPrice: 0,
    tax: 0,
    discount: 0,
    discountId: null,
    userId: null
  };
  checkoutProducts: ShoppingListItem[];
  discountCode: string;


  constructor(private shoppingCartService: ShoppingCartService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    // get user id from localStorage
    const userId = localStorage.getItem('userId');
    // add this item to cart
    this.shoppingCartService.getShoppingList(userId)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('search shopping cart items list successfully');
            this.shoppingList.products = info.data;
            this.calculate();
          } else {
            console.log('search faild');
          }
        }
      );
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
    this.shoppingList.totalPrice = totalAmt + this.shoppingList.tax;

    // apply discount
    this.shoppingList.totalPrice = this.shoppingList.totalPrice + this.shoppingList.totalPrice * this.shoppingList.discount;
  }

  clear() {
    const tmpUserId = localStorage.getItem('userId');
    this.shoppingList = {
      products: [
      ],
      totalPrice: 0,
      tax: 0,
      discount: 0,
      discountId: null,
      userId: tmpUserId
    };
  }

  /* ================================ */
  /* when Apply Discount button click */
  /* ================================ */
  applyDiscount(modal) {
    this.shoppingCartService.getDiscount(this.discountCode)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('apply discount successfully');
            this.shoppingList.discount = info.data.percentage * -1;
            this.shoppingList.discountId = info.data.discountId;
            this.calculate();
          } else {
            console.log('search faild');
          }
        }
      );
    modal.close();
  }

  /* ================================ */
  /* when checkout button click       */
  /* ================================ */
  checkout(content) {
    const userId = localStorage.getItem('userId');
    this.shoppingList.userId = userId;
    this.shoppingCartService.postCheckout(this.shoppingList)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            this.clear();
            this.doSearch();
            this.open(content);
          } else {
            console.log('search faild');
          }
        }
      );
  }
}
