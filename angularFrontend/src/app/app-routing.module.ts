import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'company', component:CompanyComponent},
  {path:'customer', component:CustomerComponent},
  {path:'', component:HomeComponent},
  {path:'', component:HeaderComponent},
  {path:'', component:FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
