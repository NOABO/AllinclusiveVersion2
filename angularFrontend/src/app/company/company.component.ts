import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  
  name: string = '';
  emailCompany: string = '';
  passwordCompany: string = '';
  phoneNumberCompany: string = '';
  adress: string = '';
  imgUrlCompany: string = '';
  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit(): void {}

  // ngDoCheck() {console.log(this.type)}

  onSubmit(pageName: string): void {
    this.router.navigate([`${pageName}`]);

    if (
    
      this.name === '' ||
      this.emailCompany === '' ||
      this.phoneNumberCompany === '' ||
      this.passwordCompany === '' ||
      this.adress === '' ||
      this.imgUrlCompany === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Something wrong',
        text: `Try again`,
      });
    } else {
      this._http
        .onsubmit(
          this.name,
          this.emailCompany,
          this.phoneNumberCompany,
          this.passwordCompany,
          this.adress,
          this.imgUrlCompany
        )
        .subscribe((data) => {
          console.log(data);
        });
    }
  }
}
