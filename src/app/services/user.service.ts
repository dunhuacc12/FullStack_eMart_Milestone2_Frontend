import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postLogin(user) {
    return this.http.post(`${environment.baseUrl}/session/${user.name}`, JSON.stringify(user), httpOptions);
  }

  getUserInfo(userName) {
    // return this.http.get(`${environment.baseUrl}/getUserInfo/${userName}`, httpOptions);
    return this.http.get('http://mock-api.com/Ln4Qk7Kx.mock/getUserInfo', httpOptions);
  }
}
