import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsService } from '../../services/students.service';
import { Students } from '../../Students';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})

export class AlunoComponent {
  students: Students[] = []


  constructor( private studentsService: StudentsService){
    this.getStudents()
  }
  
  getStudents(): void{
    this.studentsService.getAll().subscribe((Students) => (this.students = Students))
    
    console.log("this.students")
  }

  delite(matricola: string): void{

    console.log(matricola)

   
  }

}
