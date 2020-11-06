import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { EventCustomerComponent } from './event-customer/event-customer.component';


import {EventmakeraccountComponent} from './eventmakeraccount/eventmakeraccount.component';
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'company', component:CompanyComponent},
  {path:'customer', component:CustomerComponent},
  {path:'event-customer', component:EventCustomerComponent},
  {path:'eventmakeraccount',component:EventmakeraccountComponent},
  {path: 'blog', component:BlogComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutUs',component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
