import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SellerReportService {

  constructor(private http: HttpClient) { }

  postGetSellerReport(dto) {
    return this.http.post(`${environment.baseUrl4Product}/getSellerReport`, JSON.stringify(dto), httpOptions);
  }

}
