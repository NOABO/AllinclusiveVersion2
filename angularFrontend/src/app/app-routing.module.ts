import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { EventCustomerComponent } from './event-customer/event-customer.component';

const routes: Routes = [
  {path:'company', component:CompanyComponent},
  {path:'customer', component:CustomerComponent},
  {path:'event-customer', component:EventCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
