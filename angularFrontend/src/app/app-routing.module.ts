import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CustomerComponent } from './customer/customer.component';
import { EventCustomerComponent } from './event-customer/event-customer.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { EventsMadeComponent } from './events-made/events-made.component';
import { EventmakeraccountComponent } from './eventmakeraccount/eventmakeraccount.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'company', component: CompanyComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'event-customer', component: EventCustomerComponent },
  { path: 'eventmakeraccount', component: EventmakeraccountComponent },
  { path: 'login-customer', component: LoginCustomerComponent },
  { path: 'login-company', component: LoginCompanyComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'events-made', component: EventsMadeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
