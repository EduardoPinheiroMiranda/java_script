import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from '../Students';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = "http://localhost:3000/students"

  constructor (private http: HttpClient){

  }

  getAll(): Observable<Students[]> {
    return this.http.get<Students[]>(this.apiUrl)
  }
  
}
