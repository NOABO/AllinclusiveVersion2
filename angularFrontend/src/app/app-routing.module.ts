import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import {EventmakeraccountComponent} from './eventmakeraccount/eventmakeraccount.component'
const routes: Routes = [
  {path:'company', component:CompanyComponent},
  {path:'customer', component:CustomerComponent},
  {path:'eventmakeraccount',component:EventmakeraccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
