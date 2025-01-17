import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adidy } from '../adidy';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdidyService {
  apiUrl: String = 'http://localhost:5000/adidy';

  constructor(private http: HttpClient) { }

  getAllAdidy(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getAdidy(id: Number): Observable<Adidy> {
    return this.http.get<Adidy>(`${this.apiUrl}/${id}`);
  }

  createAdidy(requestObj: any): Observable<any> {
    return this.http.post<Adidy>(`${this.apiUrl}`, requestObj, httpOptions);
  }

  updateAdidy(adidy: Adidy): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${adidy.id}`, adidy, httpOptions);
  }

  deleteAdidy(adidy: Adidy): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${adidy.id}`);
  }
}
