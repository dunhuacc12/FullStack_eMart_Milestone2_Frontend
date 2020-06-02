import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' + localStorage.getItem('access_token')  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor(private http: HttpClient) { }

  getSearchResults(searchContent) {
    return this.http.get(`${environment.baseUrl}/searchItems`, httpOptions);
  }

}
