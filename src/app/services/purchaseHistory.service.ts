import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access_token')  })
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {

  constructor(private http: HttpClient) { }

  getPurchaseHistory(userId) {
    return this.http.get(`${environment.baseUrl4Order}/getPurchaseHistory/${userId}`, httpOptions);
  }

}
