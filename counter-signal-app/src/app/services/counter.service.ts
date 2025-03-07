import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = signal(0)

  count:Signal<number> = this.counter.asReadonly()

  inc(){
    this.counter.update(value => value+1)
  }

}
