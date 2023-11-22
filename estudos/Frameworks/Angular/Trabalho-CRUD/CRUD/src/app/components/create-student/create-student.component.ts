import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsService } from '../../services/students.service';
import { Students } from '../../Students';



@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})

export class CreateStudentComponent {
  studentes: Students[] = []

  constructor(private listeStudents: StudentsService){
    
  }

  matricola: string = ""
  name: string = ""
  email: string = ""

  criar(): void{
    if(this.matricola === "" || this.name === "" || this.email === ""){
      alert("Valores incompletos, preencha todos os campos para prosseguir")
    }
    else{
      this.studentes.push({
        matricola: this.matricola,
        name: this.name,
        email: this.email
      })

      this.listeStudents.addStudent(this.studentes)
      alert("Aluno adicionado com sucesso!")

      this.matricola=""
      this.name=""
      this.email=""

      this.studentes = []
    }
    
  }

}

