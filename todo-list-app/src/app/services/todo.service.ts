import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todos } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private http = inject(HttpClient);


  findAll():Observable<Todos>{
    return this.http.get<Todos>(environment.urlTodos);
  }
}
