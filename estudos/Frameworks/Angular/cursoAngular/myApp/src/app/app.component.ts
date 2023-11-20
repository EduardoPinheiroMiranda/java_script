import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Students } from './Students';
import { AlunoComponent } from './components/aluno/aluno.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    AlunoComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    FormsModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  Students: Students[] =[
    {
      matricola: "00000001",
      name: "Ricardo" ,
      email: "teste@teste.com" 
    },
    {
      matricola: "00000002",
      name: "Eduardo" ,
      email: "teste@teste.com" 
    },
    {
      matricola: "00000003",
      name: "Carlos" ,
      email: "teste@teste.com" 
    },
  ]
  
  exibirLista(): void{
    document.querySelector(".showStudents")?.classList.remove("moveleft")
    document.querySelector(".addStundent")?.classList.remove("moveleft")

    document.querySelector(".updateStudent")?.classList.remove("moveright")
    document.querySelector(".showStudents")?.classList.remove("moveright")
  }

  adicionar(): void{
    document.querySelector(".showStudents")?.classList.add("moveleft")
    document.querySelector(".addStundent")?.classList.add("moveleft")

    document.querySelector(".updateStudent")?.classList.remove("moveright")
  }

}
