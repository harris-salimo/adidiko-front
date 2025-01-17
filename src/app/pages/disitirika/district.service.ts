import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from '../district';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
  apiUrl: String = 'http://localhost:5000/districts';

  constructor(private http: HttpClient) { }

  getAllDistricts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getDistrict(id: Number): Observable<District> {
    return this.http.get<District>(`${this.apiUrl}/${id}`);
  }

  createDistrict(requestObj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, requestObj, httpOptions);
  }

  updateDistrict(district: District): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${district.id}`, district, httpOptions);
  }

  deleteDistrict(district: District): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${district.id}`);
  }
}
