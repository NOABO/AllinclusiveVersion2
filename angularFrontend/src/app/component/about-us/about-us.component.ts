import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  homeOn: boolean;
  resumeOn: boolean;
  workOn: boolean;
  contactOn: boolean;

  constructor() {}

  ngOnInit(): void {
    this.homeModeOn();
  }

  homeModeOn() {
    this.homeOn = true;
    this.resumeOn = false;
    this.workOn = false;
    this.contactOn = false;
  }

  resumeModeOn() {
    this.homeOn = false;
    this.resumeOn = true;
    this.workOn = false;
    this.contactOn = false;
  }

  workModeOn() {
    this.homeOn = false;
    this.resumeOn = false;
    this.workOn = true;
    this.contactOn = false;
  }

  contactModeOn() {
    this.homeOn = false;
    this.resumeOn = false;
    this.workOn = false;
    this.contactOn = true;
  }
}
