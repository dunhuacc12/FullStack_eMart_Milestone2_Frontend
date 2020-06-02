import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/LoginRequest';

const username = 'cloudsimpleservice';
const password = 'mysecret';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Basic ' + btoa(username + ':' + password) })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginRequest: LoginRequest = {
    grant_type: '',
    scope: '',
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  postLogin(value) {
    this.loginRequest.grant_type = 'password';
    this.loginRequest.scope = 'mobileclient';
    this.loginRequest.username = value.name;
    this.loginRequest.password = value.password;
    // return this.http.post(`${environment.baseUrl}/session/${user.name}`, JSON.stringify(user), httpOptions);
    // return this.http.post(`${environment.baseUrl4Auth}/oauth/token`, JSON.stringify(this.loginRequest), httpOptions);
    return this.http.post(`${environment.baseUrl4Auth}/oauth/token`
      + `?grant_type=password&scope=mobileclient&username=${value.name}&password=${value.password}`, null, httpOptions);
  }

  getUserInfo(userName) {
    // return this.http.get(`${environment.baseUrl}/getUserInfo/${userName}`, httpOptions);
    return this.http.get('http://mock-api.com/Ln4Qk7Kx.mock/getUserInfo', httpOptions);
  }
}
