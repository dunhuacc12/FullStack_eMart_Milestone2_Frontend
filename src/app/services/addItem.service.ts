import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access_token')  })
};

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  constructor(private http: HttpClient) { }

  getCategoryOptions() {
    return this.http.get(`${environment.baseUrl4Product}/getCategoryOptions`, httpOptions);
  }

  getSubcategoryOptions(categoryValue) {
    return this.http.get(`${environment.baseUrl4Product}/getSubcategoryOptions/${categoryValue}`, httpOptions);
  }

  postAddItem(item) {
    return this.http.post(`${environment.baseUrl4Product}/addItem`, JSON.stringify(item), httpOptions);
  }

}
