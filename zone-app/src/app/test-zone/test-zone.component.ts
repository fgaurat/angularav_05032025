import { Component, inject, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test-zone',
  imports: [],
  templateUrl: './test-zone.component.html',
  styleUrl: './test-zone.component.css',
})
export class TestZoneComponent implements OnDestroy {
  private zone= inject(NgZone)
  counter = 0;
  inter1?: any;

  onTimer1s() {
    this.inter1 = setInterval(() => this.counter++, 1000);
  }

  onTimer5s() {

    this.zone.runOutsideAngular(()=>{
      this.inter1 = setInterval(() => {
        this.counter++
        console.log("counter",this.counter)
        if(this.counter%5==0) {
            this.zone.run(()=>{
              this.counter+=0
            })
        }
      }, 1000);

    });

  }

  ngOnDestroy(): void {
    clearInterval(this.inter1)
  }
}
