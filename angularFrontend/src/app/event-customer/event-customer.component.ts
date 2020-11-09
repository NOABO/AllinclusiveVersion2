import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-customer',
  templateUrl: './event-customer.component.html',
  styleUrls: ['./event-customer.component.css'],
})
export class EventCustomerComponent implements OnInit {
  numberOfLikes: number = 0;
  data;
  products = [];
  safeurlvideo = [];
  safeUrl = [];
  videos = {};
  maps = {};
  constructor(
    private _http: HttpService,
    private _sanitizer: DomSanitizer,
    private router: Router
  ) {}

  currentVal = '';
  ngOnInit(): void {
    this._http.getEvents().subscribe((data: any[]) => {
      this.data = data;
      console.log(this.data, 'getting the events posted');
    });

    this._http.sendGetRequest().subscribe((data: any[]) => {
      // console.log(data[0].EvidURL);
      this.products = data;
      for (let i = 0; i < this.products.length; i++) {
        this.videos = this._sanitizer.bypassSecurityTrustResourceUrl(
          `${this.products[i].EvidURL}`
        );
        this.maps = this._sanitizer.bypassSecurityTrustResourceUrl(
          `${this.products[i].ElocURL}`
        );
        this.safeUrl.push(this.videos);
        this.safeurlvideo.push(this.maps);
      }
    });
    console.log('this is the safe url array===>', this.safeUrl);
    console.log('this is the videos object===>', this.videos);
  }
  handleReservationButton(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  //     this._http.getEvents().subscribe((data:[])=>{
  //       this.data = data
  //       console.log(this.data,'getting the events posted')
  //     })

  // addImg(val) {

  // this.currentVal=val
  //     let imgH= document.createElement('div');
  //     imgH.className = 'imgH';
  //     imgH.innerHTML =
  //       <img
  //                   src= ${this.currentVal}

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
