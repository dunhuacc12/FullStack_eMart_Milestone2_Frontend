import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  postSignUp4Buyer(user) {
    return this.http.post(`${environment.baseUrl}/signup-buyer`, JSON.stringify(user), httpOptions);
  }

  postSignUp4Seller(user) {
    return this.http.post(`${environment.baseUrl}/signup-seller`, JSON.stringify(user), httpOptions);
  }

}
