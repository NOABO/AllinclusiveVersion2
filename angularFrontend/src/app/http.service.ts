import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';
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
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phoneNumber: string,
    specialNeed: string,
    imgUrl: string
  ) {
    return this.http.post('http://localhost:5000/api/user/add', {
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
    Esignature: string,
    companyId: string
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
      companyId,
    });
  }
  getEvents() {
    return this.http.get('http://localhost:5000/api/event');
  }
  getEventsForCustomer() {
    return this.http.get('http://localhost:5000/api/event');
  }

  handleCustomerButton() {
    return this.http.get('http://localhost:5000/api/user/');
  }

  getEventsByCompanyId(companyId: string) {
    return this.http.post('http://localhost:5000/api/event/companyId', {
      companyId: companyId,
    });
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  sendGetRequest() {
    return this.http
      .get('http://localhost:5000/api/event/eventsCustomer')
      .pipe(retry(3), catchError(this.handleError));
  }
}
