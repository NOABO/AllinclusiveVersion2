import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  cilent: any;

  constructor(private http: HttpClient) {}

  create(data): Observable<any> {
    return this.http.post('http://localhost:5000/api/user/login', data);
  }
  public Check(user: any) {
    this.cilent = user;
  }
  public Save() {
    return this.cilent;
  }
}
