import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from '../models/action';

@Injectable({
  providedIn: 'root'
})
export class MessageQueueService {
  private bus = new Subject<Action>();
  bus$ = this.bus.asObservable();


  dispatch(action:Action){
      this.bus.next(action);
  }

}
