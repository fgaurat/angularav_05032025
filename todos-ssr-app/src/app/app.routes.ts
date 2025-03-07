import { Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';

export const routes: Routes = [
  {path:"",redirectTo:"/todos",pathMatch:"full"},
  {path:"todos",component:TodoListComponent},
  {path:"todos/:id",component:TodoDetailComponent},
  // {path:"**",component:404Component}

];
