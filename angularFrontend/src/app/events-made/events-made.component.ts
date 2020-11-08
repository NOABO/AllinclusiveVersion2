import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-events-made',
  templateUrl: './events-made.component.html',
  styleUrls: ['./events-made.component.css'],
})
export class EventsMadeComponent implements OnInit {
  Etype: string = '';
  Ename: string = '';
  Edescription: string = '';
  Edate: string = '';
  Eplace: string = '';
  ElocURL: string = '';
  Eprice: string = '';
  EvidURL: string = '';
  Esignature: string = '';
  constructor(private _http: HttpService) {}

  ngOnInit(): void {}
  showEvents() {
    this._http
      .showE(
        this.Etype,
        this.Ename,
        this.Edescription,
        this.Edate,
        this.Eplace,
        this.ElocURL,
        this.Eprice,
        this.EvidURL,
        this.Esignature
      )
      .subscribe((r) => {
        console.log(r, 'events info');
      });
  }
}
