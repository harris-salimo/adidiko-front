import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: String = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  register(requestObj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, requestObj, httpOptions);
  }

  login(requestObj: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, requestObj, httpOptions);
  }

  setLocalStorage(responseObj: any) {
    const expires = moment().add(responseObj.expiresIn);
    
    localStorage.setItem('token', responseObj.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  isLoggedIn() {
    return moment().isAfter(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('expires');
    
    return moment(JSON.parse(expiration));
  }
}
