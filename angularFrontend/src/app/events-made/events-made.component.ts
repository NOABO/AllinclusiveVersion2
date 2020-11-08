import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
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
  constructor(private _http: HttpService) {
   
      // this.untrustedElocURL='https://www.youtube.com';
      // this.untrustedEvidURL='https://www.google.com/maps/';
      // this.trustedElocURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.untrustedElocURL);
      // this.trustedEvidURL=this.sanitizer.bypassSecurityTrustResourceUrl(this.untrustedEvidURL);
    
    
  }

  ngOnInit(): void {
    this._http.getEvents().subscribe((data:any[])=>{
      this.data = data
      console.log(this.data,'getting the events posted')
    })
  }
  showEvents() {
   
      
  }
}
