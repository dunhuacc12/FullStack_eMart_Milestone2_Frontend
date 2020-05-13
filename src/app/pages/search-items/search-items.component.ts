import { Component, OnInit } from '@angular/core';
import { SearchItemsService } from '../../services/searchitems.service';
import { Router } from '@angular/router';
import { SearchResult } from '../../models/SearchResult';

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
    this.searchItemsService.searchItems(value.inputSearch).subscribe(
      (data: SearchResult[]) => {
        console.log(JSON.stringify(data));
        const info: any = data;
        if (200 === info.status) {
          if (info.data !== null && info.data.length > 0) {
            console.log('search sucess, jump to search result');
            this.router.navigate(['/searchResult', value.inputSearch]);
          }
        } else {
          console.log('search faild');
        }
      }
    );
  }

  onSearch(tip: string) {
    this.searchItemsInfo.searchValue = tip;
  }
}
