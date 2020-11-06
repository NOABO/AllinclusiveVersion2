
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
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
  slides = [{'image': 'https://www.influenceim.com/wp-content/uploads/2017/07/event-planningand-management-1024x683-750x350.jpg'}, {'image': 'https://www.kuoni-meetings-events.com/wp-content/uploads/2019/08/events1.jpg'},{'image': 'https://www.discoverhongkong.com/content/dam/dhk/intl/event/mega-events-throughout-the-year/header4_3.jpg'}, {'image': 'https://cdn2.fatsoma.com/media/W1siZiIsInB1YmxpYy8yMDE4LzEvMjQvMi8zNC81NS80OTgvTElWRS1FVkVOVFMuanBnIl1d'}, {'image': 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_415,q_60,w_750/v1/clients/fredericksburgtx/IMG_9689_Dancers_e3b7a5b0-147e-42d1-b065-3e7fe012b5c0.jpg'}];
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