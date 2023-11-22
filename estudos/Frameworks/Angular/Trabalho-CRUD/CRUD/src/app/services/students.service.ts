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
    {
      matricola: "00000004",
      name: "Carlos Serafim Nscimento Cruzd de de de ",
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

  elementUpdate(matricola: string): void{
    //recebe o numero da matricola e agrega ao matricolaUpdate, para ser 
    //trabalahdo em outra função
    this.matricolaUpdate = matricola
    //console.log(this.matricolaUpdate)
  }
  
  addStudent(listStundents: Students[]): void{
    this.students.push(listStundents[0])
  }

  delite(matricola: string): void{
    this.students = this.students.filter(student => student.matricola !== matricola)
  }

  updateStudents(update: Students[]): void{
    this.students.forEach((stunde) => {
      if(stunde.matricola === update[0].matricola){
        stunde.email = update[0].email
        stunde.name = update[0].name
        
        return
      }
    })
  }

  reset(): void{
    this.matricolaUpdate = ""
  }
}
