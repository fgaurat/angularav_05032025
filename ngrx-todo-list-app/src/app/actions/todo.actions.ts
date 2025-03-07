import { createAction, props } from '@ngrx/store';
import { ActionType } from '../models/action-type';
import { Todo, Todos } from '../models/todo';


// todo

export const loadTodo = createAction(ActionType.LOAD_TODO)
export const loadTodoSuccess = createAction(ActionType.LOAD_TODO_SUCCESS,props<{todos:Todos}>())

export const deleteTodo = createAction(ActionType.DELETE_TODO,props<{todo:Todo}>())
export const deleteTodoSuccess = createAction(ActionType.DELETE_TODO_SUCCESS,props<{todo:Todo}>())

export const newTodo = createAction(ActionType.NEW_TODO,props<{todo:Todo}>())
