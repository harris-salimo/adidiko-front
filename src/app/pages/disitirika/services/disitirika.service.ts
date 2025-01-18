import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disitirika } from '../models';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DisitirikaService {
  apiUrl: string = 'http://localhost:5000/districts';

  constructor(private readonly http: HttpClient) { }

  getAllDistricts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getDistrict(id: number): Observable<Disitirika> {
    return this.http.get<Disitirika>(`${this.apiUrl}/${id}`);
  }

  createDistrict(requestObj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, requestObj, httpOptions);
  }

  updateDistrict(district: Disitirika): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${district.id}`, district, httpOptions);
  }

  deleteDistrict(district: Disitirika): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${district.id}`);
  }
}
