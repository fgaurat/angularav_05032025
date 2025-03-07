import { Component, inject } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inc-counter',
  imports: [],
  templateUrl: './inc-counter.component.html',
  styleUrl: './inc-counter.component.css'
})
export class IncCounterComponent {
  counterService:CounterService = inject(CounterService)

  inc(){
    this.counterService.inc()
  }

}
