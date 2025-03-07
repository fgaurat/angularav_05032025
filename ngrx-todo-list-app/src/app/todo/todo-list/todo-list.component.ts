import { Component, inject, OnInit } from '@angular/core';
import { Todo, Todos } from '../../models/todo';
import { Store } from '@ngrx/store';
import { TodoState } from '../../models/todo-state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { deleteTodo, loadTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{


  private store = inject(Store<TodoState>)
  todos$:Observable<Todos> = this.store.select('todoList')

  ngOnInit(): void {
      this.store.dispatch(loadTodo())
  }

  onDeleteTodo(todo:Todo){
    console.log("ok")
    this.store.dispatch(deleteTodo({todo}))
  }

}
