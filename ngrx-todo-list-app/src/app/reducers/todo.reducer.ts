import { createReducer, on } from '@ngrx/store';
import { Todos } from '../models/todo';
import { deleteTodoSuccess, loadTodoSuccess } from '../actions/todo.actions';




export const initialState:Todos =[];


export const todoReducer = createReducer(initialState,
  on(loadTodoSuccess,(state,action)=>action.todos),
  on(deleteTodoSuccess,(state,action) => state.filter(todo=> todo.id !== action.todo.id))

)
