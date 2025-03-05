import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  private todoService = inject(TodoService);
  public todos$: Observable<Todos> = EMPTY;
  displayedColumns: string[] = [
    'id',
    'title',
    'completed',
    'chkCompleted',
    'action',
  ];

  name: string = 'Angular';

  ngOnInit(): void {
    this.todos$ = this.todoService.findAll();
  }
  updateName(event: any) {
    this.name = event.target.value;
  }
  onDelete(todo:Todo){
    this.todos$ = this.todoService.delete(todo).pipe(
      tap(data => console.log("before",data)),
      switchMap(data => this.todoService.findAll()),
      tap(data => console.log("after",data))
    )

  }

}
