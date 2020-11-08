import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-customer',
  templateUrl: './event-customer.component.html',
  styleUrls: ['./event-customer.component.css']
})
export class EventCustomerComponent implements OnInit {
  numberOfLikes : number=0;
  constructor() { }

  ngOnInit(): void {
  }
  title = "image";
  currentVal = "";
  

addImg(val) {

this.currentVal=val
    let imgH= document.createElement('div');
    imgH.className = 'imgH'; 
    imgH.innerHTML =  `
      <img
                  src= ${this.currentVal}
                
                  />`
                
      document.querySelector('.imgHolder').appendChild(imgH); 
  }
 
  likeButtonClick() {
    this.numberOfLikes++;
    console.log(this.numberOfLikes)
  }
  dislikeButtonClick() {
    this.numberOfLikes--;
    console.log(this.numberOfLikes)
  }
}
