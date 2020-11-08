import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CompanyService } from 'src/app/services/company.services';
// import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-events-made',
  templateUrl: './events-made.component.html',
  styleUrls: ['./events-made.component.css'],
})
export class EventsMadeComponent implements OnInit {
  
data;
// untrustedElocURL:string;
// untrustedEvidURL:string;
// trustedEvidURL:SafeUrl
// trustedElocURL:SafeUrl
  constructor(private _http: HttpService,private companyService:CompanyService) {
   
      // this.untrustedElocURL='https://www.youtube.com';
      // this.untrustedEvidURL='https://www.google.com/maps/';
      // this.trustedElocURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.untrustedElocURL);
      // this.trustedEvidURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.untrustedEvidURL);
    
    
  }

  ngOnInit(): void {
    const currentUser=this.companyService.Save()
    let companyId=''
    if(currentUser){
    companyId = currentUser._id;
    }
    this._http.getEventsByCompanyId(companyId).subscribe((data:[])=>{
      this.data = data
      console.log(this.data,'getting the events posted')
    })
  }
  // showEvents() {
   
      
  // }
}
