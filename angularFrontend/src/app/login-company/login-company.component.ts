import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css'],
})
export class LoginCompanyComponent implements OnInit {
  nameusercomoany: "";
  emailusercompany: "";

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  onChange(e) {
    this.nameusercomoany = e.target.value
  };

  // redirection to the company component
  handleCompanyButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  };
  
  // redirection to the login-company component
  handleCreateAccountButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
