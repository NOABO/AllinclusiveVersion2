import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css'],
})
export class LoginCustomerComponent implements OnInit {
  
  email: String = "" ;
  password: String = "" ;
  constructor(private _http: HttpService,private router: Router) {}

  ngOnInit(): void {}

  // redirection to the customer component
  handleCustomerButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }


  checkLoginCustomer(pageName: string): void {
    this.router.navigate([`${pageName}`]);
     this._http
     .onCheck(
       this.email,
       this.password
       )
       .subscribe((data)=>{ 

         console.log(data)
       })

}

  handleCreateAccountButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}