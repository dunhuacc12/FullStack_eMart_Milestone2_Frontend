import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MyStoreService {

  constructor(private http: HttpClient) { }

  getMyStoreInfo(userId) {
    return this.http.get(`${environment.baseUrl}/mystore/${userId}`, httpOptions);
  }

}
