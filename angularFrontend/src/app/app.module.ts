import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventCustomerComponent } from './event-customer/event-customer.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { EventmakeraccountComponent } from './eventmakeraccount/eventmakeraccount.component';
import { EMeventsComponent } from './emevents/emevents.component';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsMadeComponent } from './events-made/events-made.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CustomerComponent,
    NavbarComponent,
    EventCustomerComponent,
    EventmakeraccountComponent,
    EMeventsComponent,
    BlogComponent,
    ContactUsComponent,
    HomeComponent,
    EventsMadeComponent,
    LoginCustomerComponent,
    LoginCompanyComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
