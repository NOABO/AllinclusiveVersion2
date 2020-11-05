
import { Component} from '@angular/core';
import { Router } from '@angular/router';

import {CustomerComponent} from './customer/customer.component'
import {CompanyComponent} from './company/company.component'
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginCompanyComponent } from './login-company/login-company.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularFrontend';

  constructor(private router: Router){}

// redirection to the login-company component 
  handleLoginCompanyButton(pageName:string):void{
       this.router.navigate([`${pageName}`]);
  }
  
  // redirection to the login-customer component
  handleLoginButton(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}