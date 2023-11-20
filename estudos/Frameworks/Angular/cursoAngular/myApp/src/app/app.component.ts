import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  inicializador(): void{
    console.log("document.querySelector()")
  }

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
