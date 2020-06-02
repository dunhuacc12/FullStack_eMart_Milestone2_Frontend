import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access_token')  })
};

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {

  constructor(private http: HttpClient) { }

  getMyStoreInfo(userId) {
    return this.http.get(`${environment.baseUrl4Product}/mystore/${userId}`, httpOptions);
  }

  postUpdateStockNumber(product) {
    return this.http.post(`${environment.baseUrl4Product}/updateStockNumber`, JSON.stringify(product), httpOptions);
  }

}
