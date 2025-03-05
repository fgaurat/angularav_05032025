import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todos } from '../../models/todo';
import { EMPTY, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, MatTableModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {


  private todoService = inject(TodoService);
  public todos$:Observable<Todos>=EMPTY;
  // displayedColumns: string[] = ['id', 'title', 'completed'];
  displayedColumns: string[] = ['id'];

  ngOnInit(): void {

    this.todos$=this.todoService.findAll();


  }



}
