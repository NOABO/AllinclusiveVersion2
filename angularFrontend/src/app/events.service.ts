import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject'
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private EtypeSource = new BehaviorSubject<string>('default message')
  currentEtype = this.EtypeSource.observable();
  constructor() { }

  changeData(Etype: string){
    this.EtypeSource.next(Etype)
  }

}
