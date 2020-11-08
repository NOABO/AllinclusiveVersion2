import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-event-customer',
  templateUrl: './event-customer.component.html',
  styleUrls: ['./event-customer.component.css']
})
export class EventCustomerComponent implements OnInit {
  numberOfLikes : number=0;
  products = [];

  constructor(private _http: HttpService, private _sanitizationService: DomSanitizer) { }

  ngOnInit(): void {
    this._http.sendGetRequest().subscribe((data: any[]) => {
      console.log(data[0].EvidURL);
      this.products = data;

    })  
  }
  // title = "image";
//   currentVal = "";
  

// addImg(val) {

// this.currentVal=val
//     let imgH= document.createElement('div');
//     imgH.className = 'imgH'; 
//     imgH.innerHTML =  `
//       <img
//                   src= ${this.currentVal}
                
//                   />`
                
//       document.querySelector('.imgHolder').appendChild(imgH); 
//   }
 
//   likeButtonClick() {
//     this.numberOfLikes++;
//     console.log(this.numberOfLikes)
//   }
//   dislikeButtonClick() {
//     this.numberOfLikes--;
//     console.log(this.numberOfLikes)
//   }
}
