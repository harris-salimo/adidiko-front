import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard } from '../dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getDashboardData(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/dashboard');
  }
}
