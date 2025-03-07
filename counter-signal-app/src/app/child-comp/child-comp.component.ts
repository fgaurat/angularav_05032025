import { Component, InputSignal, OnChanges, Signal, SimpleChanges, WritableSignal, computed, input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  imports: [],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {


  readonly name:InputSignal<string> = input.required<string>();
  readonly firstName:InputSignal<string> = input.required<string>();


  fullName:Signal<string> = computed(() => this.name()+this.firstName() )

}
