import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlunoComponent } from './components/aluno/aluno.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    AlunoComponent,
    UpdateComponent,
    CreateStudentComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';


  addStundent(){
    document.querySelector(".showStudents")?.classList.add("moveleft")
    document.querySelector(".addStudent")?.classList.add("moveleft")

    document.querySelector(".updateStudent")?.classList.remove("moveright")
  }

  showStudents(){
    document.querySelector(".showStudents")?.classList.remove("moveleft")
    document.querySelector(".addStudent")?.classList.remove("moveleft")

    document.querySelector(".showStudents")?.classList.remove("moveright")
    document.querySelector(".updateStudent")?.classList.remove("moveright")
  }
}
