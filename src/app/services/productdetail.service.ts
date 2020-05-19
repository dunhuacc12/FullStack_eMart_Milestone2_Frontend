import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }

  getProductDetail(productId) {
    return this.http.get(`${environment.baseUrl4Product}/productDetail/${productId}`, httpOptions);
  }

  addToCart(itemId, userId) {
    const obj = { itemId: `${itemId}`, userId: `${userId}` };
    return this.http.post(`${environment.baseUrl4Order}/addToCart`, JSON.stringify(obj), httpOptions);
  }

}
