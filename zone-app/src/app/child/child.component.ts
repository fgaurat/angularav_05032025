import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input()
  cpt!:{value:number}


  ref = inject(ChangeDetectorRef)

  onChangeDetection(e:any){
    // e.stopPropagation()
    this.ref.detectChanges()

  }

}
