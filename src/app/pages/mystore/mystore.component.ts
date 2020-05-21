import { Component, OnInit } from '@angular/core';
import { MyStore } from '../../models/MyStore';
import { MyStoreListItem } from '../../models/MyStoreListItem';
import { MyStoreService } from '../../services/mystore.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mystore',
  templateUrl: './mystore.component.html',
  styleUrls: ['./mystore.component.css']
})
export class MystoreComponent implements OnInit {

  myStore: MyStore = {
    userId: '',
    storeName: '',
    products: [
    ]
  };

  numberOfStock: string;
  closeResult: string;

  constructor(private myStoreService: MyStoreService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.doSearch();
  }

  doSearch() {
    // get user id from localStorage
    const userId = localStorage.getItem('userId');
    this.myStoreService.getMyStoreInfo(userId)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('search successfully');
            this.myStore = info.data;
          } else {
            console.log('search faild');
          }
        }
      );
  }

  updateStockNumber(product: MyStoreListItem) {
    this.myStoreService.postUpdateStockNumber(product)
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          const info: any = data;
          if (200 === info.status) {
            console.log('update successful');
            this.doSearch();
          } else {
            console.log('search faild');
          }
        }
      );
  }

  report() {
    this.router.navigate(['/seller-report']);
  }

  addItem() {
    this.router.navigate(['/addItem']);
  }

  open(content, product) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      product.stockNumber = result;
      this.updateStockNumber(product);
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
