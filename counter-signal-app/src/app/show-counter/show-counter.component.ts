import { Component, inject, Signal } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-show-counter',
  imports: [],
  templateUrl: './show-counter.component.html',
  styleUrl: './show-counter.component.css'
})
export class ShowCounterComponent {
  count:Signal<number> = inject(CounterService).count


}
