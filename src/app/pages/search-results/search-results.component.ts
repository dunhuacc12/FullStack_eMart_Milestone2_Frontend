import { Component, OnInit } from '@angular/core';
import { SearchItemsService } from '../../services/searchitems.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchResult } from '../../models/SearchResult';

const SEARCH_RESULTS: SearchResult[] = [
  {
    itemId: '1',
    imgUrl: 'https://shopstatic.vivo.com.cn/vivoshop/commodity/14/10001814_1576461527559_750x750.png.webp',
    itemName: 'vivo X30 pro',
    price: 500.105,
    storeName: 'vivo mobile store'
  },
  {
    itemId: '2',
    imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/38153b7ed552c6f42d88732a8e95b9fc.jpg?w=800&h=532',
    itemName: 'Xiaomi Mi Note 10 Pro',
    price: 550,
    storeName: 'Xiaomi mobile store'
  },
  {
    itemId: '3',
    imgUrl: 'https://2d.zol-img.com.cn/product/204_400x300/581/ceeHsI0R2muyU.jpg',
    itemName: 'HUAWEI P40 Pro',
    price: 600,
    storeName: 'HUAWEI mobile store'
  }
];

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {

  searchValue: string;
  searchValueLabel: string;
  searchResult: SearchResult[];
  key: string;

  constructor(private searchItemsService: SearchItemsService, private routeInfo: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    console.log('ngOnInit is called');
    this.key = 'searchValue';
    this.searchValue = this.routeInfo.snapshot.params[this.key];
    this.searchValueLabel = '"' + this.searchValue + '" Search Results';
    this.doSearch();
  }

  doSearch() {
    this.searchItemsService.searchItems(this.searchValue).subscribe(
      data => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (200 === info.status) {
          if (info.data !== null && info.data.length > 0) {
            console.log('search sucess, see search result');
            this.searchResult = info.data;
          }
        } else {
          console.log('search faild');
        }
      }
    );
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

  onViewDetails(itemId: any) {
    console.log('itemId:' + itemId);
    this.router.navigate(['/productDetail', itemId]);
  }
}
