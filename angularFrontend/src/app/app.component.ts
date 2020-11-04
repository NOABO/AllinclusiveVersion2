import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CustomerComponent} from './customer/customer.component'
import {CompanyComponent} from './company/company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularFrontend';

  constructor(private router: Router){}

// redirection to the company component 
  handleCompanyButton(pageName:string):void{
       this.router.navigate([`${pageName}`]);
  }
  // redirection to the customer component
  handleCustomerButton(pageName:string):void{
       this.router.navigate([`${pageName}`]);
  }
}
