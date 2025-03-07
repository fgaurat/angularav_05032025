import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  imports: [CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit{

  private route = inject(ActivatedRoute)
  private todoService = inject(TodoService)

  todo$:Observable<Todo> =EMPTY

  ngOnInit(): void {
    this.todo$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        console.log(id)
        return this.todoService.findById(id);
      })
    );
  }


}
