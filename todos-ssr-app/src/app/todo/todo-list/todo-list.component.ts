import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { EMPTY, Observable } from 'rxjs';
import { Todos } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todoService:TodoService= inject(TodoService)
  todos$:Observable<Todos> = EMPTY

  ngOnInit(){
    this.todos$ = this.todoService.findAll()
  }


}
