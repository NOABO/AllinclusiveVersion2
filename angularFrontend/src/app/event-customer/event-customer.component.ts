import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DomSanitizer,SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-event-customer',
  templateUrl: './event-customer.component.html',
  styleUrls: ['./event-customer.component.css']
})
export class EventCustomerComponent implements OnInit {
  numberOfLikes : number=0;
  data;
  constructor(private _http: HttpService) { }

  // ngOnInit(): void {
  // }
  // title = "image";
  currentVal = "";
  ngOnInit(): void {
    this._http.getEvents().subscribe((data:[])=>{
      this.data = data
      console.log(this.data,'getting the events posted')
    })
  }

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
