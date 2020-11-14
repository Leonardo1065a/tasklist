import { Task } from './../models/task.model';
import { Injectable } from '@angular/core';
import { Observable, throwError, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080/tasks';

@Injectable({
    providedIn: 'root'
})
export class TaskListService {

    constructor(private http: HttpClient) { }

    get(): Observable<Task[]>{
      return this.http.get<Task[]>(`${ API_BASE }`)
        .pipe(this.result());
    }

    getById(id: number): Observable<Task>{
        return this.http.get<Task[]>(`${ API_BASE }/${id}`)
          .pipe(this.result());
      }
  
    post(task: Task): Observable<Task> {
      return this.http.post(`${ API_BASE }`, task)
        .pipe(this.result());
    }
  
    put(task: Task): Observable<Task> {
      return this.http.put(`${ API_BASE }/${task.id}`, task)
        .pipe(this.result());
    }
  
    delete(id: number): Observable<Object> {
      return this.http.delete(`${ API_BASE }/${id}`);
    }
  
    result(): any{
      return pipe(
        map((res: any) => res),
        catchError((err: any) => throwError({ message: err })))
     }
}
