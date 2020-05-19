import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../services/productdetail.service';
import { ProductDetail } from '../../models/ProductDetail';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

const PRODUCT_DETAIL: ProductDetail = {
  productId: '',
  imgUrl: [],
  productName: '',
  price: 0,
  storeName: '',
  descriptions: []
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  /**
   * product detail infomation object.
   */
  productDetail: ProductDetail = PRODUCT_DETAIL;
  page: number;
  imgSize: number;
  searchValue: string;
  productId: string;

  // tslint:disable-next-line:max-line-length
  constructor(private productDetailService: ProductDetailService, private routeInfo: ActivatedRoute, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    const key = 'productId';
    this.productId = this.routeInfo.snapshot.params[key];
    this.doSearch();
  }

  /** search product detail */
  doSearch() {
    this.productDetailService.getProductDetail(this.productId)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            if (info.data !== null) {
              console.log('search sucess, see search result');
              this.productDetail = info.data;
              if (this.productDetail.imgUrl && this.productDetail.imgUrl.length > 0) {
                this.imgSize = this.productDetail.imgUrl.length * 10;
                this.page = 1;
              }
            }
          } else {
            console.log('search faild');
          }
        }
      );
  }

  /* when Search button click */
  onSubmit(value: any) {
    this.router.navigate(['/searchResult', value.inputSearch]);
  }

  addToCard(content) {
    // get user id from localStorage
    const userId = localStorage.getItem('userId');
    // add this item to cart
    this.productDetailService.addToCart(this.productId, userId)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('add to cart successfully');
            this.open(content);
          } else {
            console.log('add faild');
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
}
