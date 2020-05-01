import { Component, OnInit } from '@angular/core';
import { SearchItemsService } from '../../services/searchitems.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {

  public searchItemsInfo: any = {
    searchValue: ''
  };

  searchTips: string[] = ['suit', 'shoe', 'attache case', 'T-shirt', 'wine', 'coke', 'sports', 'car', 'mansion', 'book'];

  constructor(private searchItemsService: SearchItemsService, private router: Router) {
  }

  ngOnInit(): void {
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

  onSearch(tip: string) {
    this.searchItemsInfo.searchValue = tip;
  }
}
