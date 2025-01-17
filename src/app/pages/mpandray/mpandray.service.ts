import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mpandray } from '../mpandray';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MpandrayService {
  apiUrl: String = 'http://localhost:5000/mpandray';

  constructor(private http: HttpClient) { }

  getAllMpandray(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getMpandray(id: Number): Observable<Mpandray> {
    return this.http.get<Mpandray>(`${this.apiUrl}/${id}`);
  }

  createMpandray(reqObject: any): Observable<any> {
    return this.http.post<Mpandray>(`${this.apiUrl}`, reqObject, httpOptions);
  }

  updateMpandray(mpandray: Mpandray): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${mpandray.id}`, mpandray, httpOptions);
  }

  deleteMpandray(mpandray: Mpandray): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${mpandray.id}`);
  }
}
