import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../services/productdetail.service';
import { ProductDetail } from '../../models/ProductDetail';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

const PRODUCT_DETAIL: ProductDetail = {
  productId: '1',
  imgUrl: [
    'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png.webp',
    'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527223_750x750.png.webp',
    'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527445_750x750.png.webp',
    'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527690_750x750.png.webp',
  ],
  productName: 'vivo X30 Pro',
  price: '600',
  storeName: 'vivo mobile store',
  descriptions: [
    'Height: 158.45mm',
    'Width: 74.10mm',
    'CPU model: Exynos 980',
    'CPU core number: eight core processor',
    'CPU frequency: 2 * 2.2GHz A77 + 6 * 1.8GHz A55',
    'Storage memory (RAM): 8GB',
    'Body storage (ROM): 128GB / 256GB',
    'Size (inches): 6.44 inches',
    'Screen ratio: 20: 9',
    'Resolution: 2400 × 1080',
    'Front camera pixels: 32 million pixels',
    'Rear camera pixels: 64 million pixels'
  ]
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
  productDetail: ProductDetail;
  page: number;
  imgSize: number;
  searchValue: string;

  // tslint:disable-next-line:max-line-length
  constructor(private productDetailService: ProductDetailService, private routeInfo: ActivatedRoute, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    this.doSearch();
  }

  doSearch() {
    // TODO Send the request when the microservice is completed
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.productDetailService.getProductDetail(params.get('productId'))
    //   )
    // ).subscribe(items => this.productDetail = items as ProductDetail);
    this.productDetail = PRODUCT_DETAIL;
    this.imgSize = this.productDetail.imgUrl.length * 10;
    this.page = 1;
  }

  /* when Search button click */
  onSubmit(value: any) {
    // TODO Send the request when the microservice is completed
    // this.searchItemsService.getSearchItems(value).subscribe(
    //   data => {
    //     console.log(JSON.stringify(data));
    //     const info: any = data;
    //     if (200 === info.code) {
    //       console.log('search sucess, jump to search result');
    //       this.router.navigate(['/searchResult', value]);
    //     } else {
    //       console.log('search faild');
    //     }
    //   }
    // );
    this.router.navigate(['/searchResult', value.inputSearch]);
  }

  addToCard(content) {
    // TODO add to cart
    this.open(content);
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
