import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mpampiasa } from '../models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MpampiasaService {
  apiUrl: string = 'http://localhost:5000/users';

  constructor(private readonly http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getUser(id: number): Observable<Mpampiasa> {
    return this.http.get<Mpampiasa>(`${this.apiUrl}/${id}`);
  }

  updateUser(requestObj: any): Observable<Mpampiasa> {
    return this.http.put<Mpampiasa>(
      `${this.apiUrl}/${requestObj.id}`,
      requestObj,
      httpOptions
    );
  }

  deleteUser(user: Mpampiasa): Observable<Mpampiasa> {
    return this.http.delete<Mpampiasa>(`${this.apiUrl}/${user.id}`);
  }
}
