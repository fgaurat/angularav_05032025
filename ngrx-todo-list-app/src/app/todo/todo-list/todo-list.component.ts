import { Component, inject } from '@angular/core';
import { Todos } from '../../models/todo';
import { Store } from '@ngrx/store';
import { TodoState } from '../../models/todo-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  private store = inject(Store<TodoState>)
  todos$:Observable<Todos> = this.store.select('todoList')

}
