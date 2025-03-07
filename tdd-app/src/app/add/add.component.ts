import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  val1!:number
  val2!:number
  result!:number


  sum(){
    this.result = this.val1+this.val2
  }

}
