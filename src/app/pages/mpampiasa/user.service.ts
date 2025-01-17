import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class UserService {
  apiUrl: String = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getUser(id: Number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUser(requestObj: any): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${requestObj.id}`, requestObj, httpOptions);
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${user.id}`);
  }
}
