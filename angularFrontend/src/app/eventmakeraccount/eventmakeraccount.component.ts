import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventmakeraccount',
  templateUrl: './eventmakeraccount.component.html',
  styleUrls: ['./eventmakeraccount.component.css'],
})
export class EventmakeraccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'video';
  currentVal = '';
  add(val) {
    this.currentVal = val;
    let videoFrame = document.querySelector('.showVideo');
    videoFrame.innerHTML = `<iframe
               width="640"
               height="480"
               controls
               src=${this.currentVal}
           >
              </iframe>
                `;
  }
}
