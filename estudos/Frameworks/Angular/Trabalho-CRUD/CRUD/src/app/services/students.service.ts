import { Injectable } from '@angular/core';
import { Students } from '../Students';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  students: Students[] = [
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

  matricolaUpdate: string = ''

  constructor() { 
    this.load()
  }

  load(): Students[] {
    return this.students
  }

  loadUpdate(): string{
    //console.log(this.matricolaUpdate)
    return this.matricolaUpdate
  }

  addStudent(listStundents: Students[]){
    this.students.push(listStundents[0])
  }

  delite(matricola: string){
    this.students = this.students.filter(student => student.matricola !== matricola)
  }

  elementUpdate(matricola: string){
    //recebe o numero da matricola e agrega ao matricolaUpdate, para ser 
    //trabalahdo em outra função
    this.matricolaUpdate = matricola
    //console.log(this.matricolaUpdate)
  }
}
