import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-events-made',
  templateUrl: './events-made.component.html',
  styleUrls: ['./events-made.component.css'],
})
export class EventsMadeComponent implements OnInit {
  
data;
  constructor(private _http: HttpService) {}

  ngOnInit(): void {
    this._http.getEvents().subscribe((data:any[])=>{
      this.data = data
      console.log(this.data,)
    })
  }
  showEvents() {
    this._http
      
  }
}
