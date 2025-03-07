import { Component, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Todo } from '../../models/todo';
import { Store } from '@ngrx/store';
import { TodoState } from '../../models/todo-state';
import { newTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-reactive-form.component.html',
  styleUrl: './todo-reactive-form.component.css'
})
export class TodoReactiveFormComponent {
  private formBuilder = inject(FormBuilder);
  private store = inject(Store<TodoState>)

  todoForm = this.formBuilder.group({
    title:['',Validators.required],
    completed:[false]
  })

  onNewTodo(){
    const todo:Todo = this.todoForm.value as Todo
    this.store.dispatch(newTodo({todo}))
  }


}
