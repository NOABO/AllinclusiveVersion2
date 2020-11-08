import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomerService } from 'src/app/services/customer.services';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css'],
})
export class LoginCustomerComponent implements OnInit {

  loginForm;

  constructor(
    private router: Router,
    private CustomerService: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  handleCreateAccountButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
    const currentUser = this.CustomerService.Save() || {};
    console.log(currentUser);
    if (Object.keys(currentUser).length) {
      this.router.navigate([currentUser.type]);
    }
  }

  onSubmit(log, pageName: string): void {
    console.log(log);
    const company = {
      email: log.email,
      password: log.password,
    };
    this.CustomerService.create(company).subscribe((res: any) => {
      this.CustomerService.Check(res);
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
