import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Students } from '../../Students';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
  students: Students[] = []

  constructor(private listEstudents: StudentsService){
    this.loadData()
  }

  loadData(): void{
    this.students = this.listEstudents.load()
  }

  delite(matricola: string){}
  
}
