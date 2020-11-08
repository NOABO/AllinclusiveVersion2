import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }

  onsubmit(
    type: string,
    name: string,
    emailCompany: string,
    phoneNumberCompany: string,
    passwordCompany: string,
    adress: string,
    imgUrlCompany: string
  ) {
    return this.http.post('http://localhost:5000/api/company/add', {
      type,
      name,
      emailCompany,
      passwordCompany,
      phoneNumberCompany,
      adress,
      imgUrlCompany,
    });
  };

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

  onRRRR(
    Etype: string ,
    Ename: string ,
    Edescription: string ,
    Edate: string ,
    Eplace: string ,
    ElocURL: string ,
    Eprice: string ,
    EvidURL: string,
    Esignature: string,
  ) {
    return this.http.post('http://localhost:5000/api/event/add', {
    Etype,
    Ename,
    Edescription,
    Edate,
    Eplace ,
    ElocURL ,
    Eprice ,
    EvidURL,
    Esignature
    });
  }
  showE(
    Etype: string ,
    Ename: string ,
    Edescription: string ,
    Edate: string ,
    Eplace: string ,
    ElocURL: string ,
    Eprice: string ,
    EvidURL: string,
    Esignature: string,
  ) {
    return this.http.post('http://localhost:5000/api/event/add', {
    Etype,
    Ename,
    Edescription,
    Edate,
    Eplace ,
    ElocURL ,
    Eprice ,
    EvidURL,
    Esignature
    });
  }
  onCheck(
    email:String,
    password:String
  ){

    return this.http.post('http://localhost:5000/api/user/login', {
      email,
      password
    })
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
  sendGetRequest(){
    return this.http.get('http://localhost:5000/api/event/eventsCustomer').pipe(retry(3), catchError(this.handleError));
  }

}
