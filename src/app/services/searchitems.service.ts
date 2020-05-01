import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchItemsService {

  constructor(private http: HttpClient) { }

  getSearchItems(searchContent) {
    return this.http.post(`${environment.baseUrl}/searchItems`, JSON.stringify(searchContent), httpOptions);
  }

}
