import { Component } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';
import { FormsModule } from '@angular/forms';
import { ShowCounterComponent } from '../show-counter/show-counter.component';
import { IncCounterComponent } from '../inc-counter/inc-counter.component';

@Component({
  selector: 'app-parent-comp',
  imports: [ChildCompComponent,FormsModule,ShowCounterComponent,IncCounterComponent],
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {
  name="GAURAT"
  firstName="Fred"

}
