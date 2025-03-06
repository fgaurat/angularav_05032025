import { Component, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { MessageQueueService } from '../../services/message-queue.service';
import { ActionType } from '../../models/action-type';

@Component({
  selector: 'app-todo-form',
  imports: [MatFormFieldModule,MatInputModule,MatCheckboxModule,MatButtonModule,FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  private todoService = inject(TodoService)
  private messageQueueService = inject(MessageQueueService)

  todoForm:Todo={
    title:"",
    completed:false
  }

  submitTodo(){
    console.log(this.todoForm)
    this.messageQueueService.dispatch({type:ActionType.NEW_TODO,payload:this.todoForm})
    // this.todoService.save(this.todoForm).subscribe(()=>this.messageQueueService.dispatch({type:ActionType.NEW_TODO}))
  }
}
