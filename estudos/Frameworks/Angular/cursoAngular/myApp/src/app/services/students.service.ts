import { Injectable } from '@angular/core';
import { Students } from '../Students';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  
  students = [
    {
      matricola: "00000001",
      name: "Eduardo",
      email: "eduardoteste@gmail.com"
    },
    {
      matricola: "00000002",
      name: "Ricardo",
      email: "Ricardoteste@gmail.com"
    },
    {
      matricola: "00000003",
      name: "Carlos",
      email: "Carlosteste@gmail.com"
    },
    
  ]

  constructor(){
    this.load()
  }

  load(): Students[]{
    return this.students
  }

  delite(matricola: string){
    this.students = this.students.filter(student => student.matricola !== matricola)
    this.load()
    console.log(this.students)
  }
}
