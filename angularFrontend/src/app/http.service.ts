import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  onsubmit(
    
    name: string,
    emailCompany: string,
    phoneNumberCompany: string,
    passwordCompany: string,
    adress: string,
    imgUrlCompany: string
  ) {
    return this.http.post('http://localhost:5000/api/company/add', {
      
      name,
      emailCompany,
      passwordCompany,
      phoneNumberCompany,
      adress,
      imgUrlCompany,
    });
  }

  onclick(
    type: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    specialNeed: string,
    imgUrl: string
  ) {
    return this.http.post('http://localhost:5000/api/user/add', {
      type,
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      specialNeed,
      imgUrl,
    });
  }

  sendEmail(data) {
    return this.http.post('http://localhost:5000/api/user/send', data);
  }

  onRRRR(
    Etype: string,
    Ename: string,
    Edescription: string,
    Edate: string,
    Eplace: string,
    ElocURL: string,
    Eprice: string,
    EvidURL: string,
    Esignature: string
  ) {
    return this.http.post('http://localhost:5000/api/event/add', {
      Etype,
      Ename,
      Edescription,
      Edate,
      Eplace,
      ElocURL,
      Eprice,
      EvidURL,

      Esignature,
    });
  }
  getEvents() {
    return this.http.get('http://localhost:5000/api/event');
  }
  getEventsForCustomer() {
    return this.http.get('http://localhost:5000/api/event');
  }
}
