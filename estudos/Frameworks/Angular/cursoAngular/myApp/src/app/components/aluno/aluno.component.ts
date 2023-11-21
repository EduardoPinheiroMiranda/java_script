import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { StudentsService } from '../../services/students.service';
import { Students } from '../../Students';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css',

})

export class AlunoComponent {
  students: Students[] = []

  constructor( private studentsService: StudentsService){
    this.loadDate()
  }

  loadDate(): void{
    this.students = this.studentsService.load()
    //console.log(this.students)
  }
  
  delite(matricola: string) :void{
    let listStudents = this.studentsService.delite(matricola)

  }

 
}
