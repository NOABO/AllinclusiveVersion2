import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  User: any;
  
  constructor(private http: HttpClient) {}

  createLogin(data): Observable<any> {
    return this.http.post('http://localhost:5000/api/company/login', data);
  }
  create(data): Observable<any> {
    return this.http.post('http://localhost:5000/api/user/login', data);
  }
  public Check(user: any) {
    this.User = user;
  }
  public Save() {
    return this.User;
  }
  
}
