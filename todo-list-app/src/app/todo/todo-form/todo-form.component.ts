import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-form',
  imports: [MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {


  todoForm:Todo={
    title:"",
    completed:false
  }

  submitTodo(){
    console.log(this.todoForm)
  }
}
