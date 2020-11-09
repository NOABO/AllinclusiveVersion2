import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { CompanyService } from 'src/app/services/company.services';
@Component({
  selector: 'app-eventmakeraccount',
  templateUrl: './eventmakeraccount.component.html',
  styleUrls: ['./eventmakeraccount.component.css'],
})
export class EventmakeraccountComponent implements OnInit {
  Etype: string = '';
  Ename: string = '';
  Edescription: string = '';
  Edate: string = '';
  Eplace: string = '';
  ElocURL: string = '';
  Eprice: string = '';
  EvidURL:  string='' ;
  Esignature:string='';
  
  constructor(private _http: HttpService,private router: Router ,private companyService:CompanyService) {}
  ngOnInit(): void { }
  title = 'video';
  currentVal = '';

  add(val) {
    this.currentVal = val;
    let videoFrame = document.querySelector('.showVideo');
    videoFrame.innerHTML = `<iframe
               width="640"
               height="480"
               controls
               src="${this.currentVal}"
           >
              </iframe>
                `;
  }
  markerTitle = 'marker';
  currentMarker = '';

  addMarker(val) {
    this.currentMarker = val;
    let Gmap = document.querySelector('.Gmap');
    Gmap.innerHTML = `           <iframe src= "${this.currentMarker}"
                    width="400"
                    height="300"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"> 
            </iframe> `
}
//saving to database
onSubmit1(pageName: string):void{
  this.router.navigate([`${pageName}`]);
  const companyId = this.companyService.Save()._id;
  console.log(companyId)
  this._http
.onRRRR(
    this.Etype,
    this.Ename,
    this.Edescription,
    this.Edate,
    this.Eplace,
    this.ElocURL,
    this.Eprice,
    this.EvidURL,
    this.Esignature,
    companyId
  )
  .subscribe((r) => {
    console.log(r,'this is the body send');
  }); 
        }
}

