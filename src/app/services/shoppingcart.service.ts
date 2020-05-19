import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  getShoppingList(userId) {
    return this.http.get(`${environment.baseUrl4Order}/getShoppingList/${userId}`, httpOptions);
  }

  postCheckout(products) {
    return this.http.post(`${environment.baseUrl4Order}/checkout`, JSON.stringify(products), httpOptions);
  }

  getDiscount(discountCode) {
    return this.http.get(`${environment.baseUrl4Order}/getDiscount/${discountCode}`, httpOptions);
  }

}
