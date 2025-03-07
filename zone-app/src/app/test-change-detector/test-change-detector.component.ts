import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-test-change-detector',
  imports: [],
  templateUrl: './test-change-detector.component.html',
  styleUrl: './test-change-detector.component.css',
})
export class TestChangeDetectorComponent {

  ref:ChangeDetectorRef = inject(ChangeDetectorRef)
  counter=0

  onTimer1s() {
    interval(1000).pipe(
      take(10)
    ).subscribe(()=> this.counter++)

  }

  onTimer5s() {
    this.ref.detach()
    interval(1000).pipe(
      take(10)
    ).subscribe(()=> {
      console.log(this.counter)
      this.counter++
      if(this.counter%5 == 0){
        this.ref.detectChanges()
      }
    })

  }
}
