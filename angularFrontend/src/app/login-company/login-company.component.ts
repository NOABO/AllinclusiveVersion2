import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.services';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css'],
})
export class LoginCompanyComponent implements OnInit {
<<<<<<< HEAD
  nameusercomoany: "";
  emailusercompany: "";

  constructor(private router: Router) {}

  ngOnInit(): void {
   
  }

  onChange(e) {
    this.nameusercomoany = e.target.value
  };

=======
  emailCompany: String = '';
  companyName: String = '';
  passwordCompany: String = '';
  constructor(private router: Router, private CompanyService: CompanyService) {}

  ngOnInit(): void {}
  save() {
    const data = {
      emailCompany: this.emailCompany,
      passwordCompany: this.passwordCompany,
    };
    console.log(data);
    this.CompanyService.createLogin(data).subscribe((res) => console.log(res));
  }
>>>>>>> be6caf74a84d1a0ea4a8db6c7792ea9df481cb4d
  // redirection to the company component
  handleCompanyButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  };
  
  // redirection to the login-company component
  handleCreateAccountButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
