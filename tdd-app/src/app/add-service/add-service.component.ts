import { Component, inject, Inject } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-add-service',
  imports: [],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {

  addService:AddService = inject(AddService)


  val1!:number
  val2!:number
  result!:number

  sum(){
  this.result = this.addService.add(this.val1,this.val2)
  }
}
