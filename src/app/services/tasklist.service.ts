import { Task } from './../models/task.model';
import { Injectable } from '@angular/core';
import { Observable, throwError, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaskListService {
    private _tasksUrl: string;
    constructor(private http: HttpClient) { 
      this._tasksUrl = `${environment.apiUrl}/tasks`;
    }

    get(): Observable<Task[]>{
      return this.http.get<Task[]>(`${ this._tasksUrl }`)
        .pipe(this.result());
    }

    getById(id: number): Observable<Task>{
        return this.http.get<Task[]>(`${ this._tasksUrl }/${id}`)
          .pipe(this.result());
      }
  
    post(task: Task): Observable<Task> {
      return this.http.post(`${ this._tasksUrl }`, task)
        .pipe(this.result());
    }
  
    put(task: Task): Observable<Task> {
      return this.http.put(`${ this._tasksUrl }/${task.id}`, task)
        .pipe(this.result());
    }
  
    delete(id: number): Observable<Object> {
      return this.http.delete(`${ this._tasksUrl }/${id}`);
    }
  
    result(): any{
      return pipe(
        map((res: any) => res),
        catchError((err: any) => throwError({ message: err })))
     }
}
