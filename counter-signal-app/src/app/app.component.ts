import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentCompComponent } from './parent-comp/parent-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ParentCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-signal-app';
  count:WritableSignal<number> = signal(0);
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor(){
    effect(()=>{
      console.log(`The current count is: ${this.count()}`);
    })
  }

  setCount(){
    this.count.set(3)
  }

  incCount(){
    this.count.update(previousValue =>previousValue+1)
  }

}
