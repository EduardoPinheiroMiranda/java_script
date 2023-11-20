import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Students } from '../../Students';

import { StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})

export class CreateStudentComponent {
  constructor(private studentService: StudentsService){
    
  }

  @Input() students: Students[] = [
    {
      matricola: "",
      name: "",
      email: "",
    }
  ]

  matricola: string = "";
  name: string = "";
  email: string = "";

  criar(): void{

    this.students.push(
      {
        matricola: this.matricola,
        name: this.name,
        email: this.email
      }
    )

    alert("Aluno adicionado")
    this.matricola = ""
    this.name = ""
    this.email = ""

    console.log(this.students)
  }

}
