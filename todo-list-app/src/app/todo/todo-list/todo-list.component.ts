import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo, Todos } from '../../models/todo';
import { EMPTY, filter, merge, Observable, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessageQueueService } from '../../services/message-queue.service';
import { Action } from '../../models/action';
import { ActionType } from '../../models/action-type';
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
export class TodoListComponent implements OnInit,AfterViewInit {
  private todoService = inject(TodoService);
  private messaQueueService = inject(MessageQueueService);

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

    const loadTodo$ = this.messaQueueService.bus$.pipe(filter((action:Action)=>action.type==ActionType.LOAD_TODO))

    const newTodo$ = this.messaQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.NEW_TODO),
      switchMap((action:Action) =>  this.todoService.save(action.payload))
    )

    const deleteTodo$ = this.messaQueueService.bus$.pipe(
      filter((action:Action)=>action.type==ActionType.DELETE_TODO),
      switchMap((action:Action) =>  this.todoService.delete(action.payload))
    )

    // this.messaQueueService.bus$.subscribe((action:Action)=>this.todos$ = this.todoService.findAll())
    // this.todos$ = this.todoService.findAll();

    this.todos$ = merge(loadTodo$,newTodo$,deleteTodo$).pipe(
      switchMap(() => this.todoService.findAll())
    )

  }


  ngAfterViewInit(){
    this.messaQueueService.dispatch({type:ActionType.LOAD_TODO})
  }

  updateName(event: any) {

    this.name = event.target.value;
  }


  onDelete(todo:Todo){

    this.messaQueueService.dispatch({type:ActionType.DELETE_TODO,payload:todo})

    // this.todos$ = this.todoService.delete(todo).pipe(
    //   tap(data => console.log("before",data)),
    //   switchMap(data => this.todoService.findAll()),
    //   tap(data => console.log("after",data))
    // )

  }

}
