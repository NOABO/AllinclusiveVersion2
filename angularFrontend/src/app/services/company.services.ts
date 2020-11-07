import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  createLogin(data): Observable<any> {
    return this.http.post('http://localhost:5000/api/company/login', data);
  }
}
