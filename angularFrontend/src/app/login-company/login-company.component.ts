import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.services';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-company',
  templateUrl: './login-company.component.html',
  styleUrls: ['./login-company.component.css'],
})
export class LoginCompanyComponent implements OnInit {
  loginForm;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private CompanyService: CompanyService
  ) {
    this.loginForm = this.formBuilder.group({
      emailCompany: '',
      passwordCompany: '',
    });
  }

  ngOnInit(): void {
    const currentUser = this.CompanyService.Save() || {};
    console.log(currentUser);
    if (Object.keys(currentUser).length) {
      this.router.navigate([currentUser.type]);
    }
  }
  handleCreateAccountButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  onSubmit(log, pageName: string): void {
    console.log(log);
    const company = {
      emailCompany: log.emailCompany,
      passwordCompany: log.passwordCompany,
    };
    this.CompanyService.createLogin(company).subscribe((res: any) => {
      this.CompanyService.Check(res);
      if (Object.keys(res).length) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate([`${pageName}`]);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something wrong',
          text: `Try again`,
        });
      }
    });
  }
}
