import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  type: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  passWord: string = '';
  phoneNumber: string = '';
  specialNeed: string = '';
  imgUrl: string = '';
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}

  // ngDoCheck() {console.log(this.type)}

  onSubmit() {
    this._http
      .onclick(
        this.type,
        this.firstName,
        this.lastName,
        this.email,
        this.passWord,
        this.phoneNumber,
        this.specialNeed,
        this.imgUrl
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
