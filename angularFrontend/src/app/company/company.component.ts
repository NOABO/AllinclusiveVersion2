import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  type: string = '';
  name: string = '';
  emailCompany: string = '';
  passwordCompany: string = '';
  phoneNumberCompany: string = '';
  adress: string = '';
  imgUrlCompany: string = '';
  constructor(private _http: HttpService ,private router: Router) {}

  ngOnInit(): void {}

  // ngDoCheck() {console.log(this.type)}
  
  onSubmit(pageName:string):void {
    
      this.router.navigate([`${pageName}`]);
    
    this._http
      .onsubmit(
        this.type,
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
