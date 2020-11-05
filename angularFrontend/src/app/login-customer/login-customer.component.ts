import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})

export class LoginCustomerComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  handleCreateAccountButton(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
}
