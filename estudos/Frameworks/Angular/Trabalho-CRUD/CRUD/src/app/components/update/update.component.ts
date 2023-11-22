import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { Students } from '../../Students';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  students: Students[] = []

  newName = ""
  newEmail = ""
  matricola: string = ""

  constructor(private listStudent: StudentsService){
    
  }

  load(): void{
    document.querySelector(".alert")?.classList.add("hide")

    this.matricola = this.listStudent.loadUpdate()
    this.students = this.listStudent.load()

    this.students.forEach((student) => {
      if(student.matricola === this.matricola){
        this.newName = student.name
        this.newEmail = student.email
      }
    })
    
    
  }

  abort(){
    this.matricola = ""
    document.querySelector(".showStudents")?.classList.remove("moveright")
    document.querySelector(".updateStudent")?.classList.remove("moveright")

    setTimeout(() => {
      document.querySelector(".alert")?.classList.remove("hide")
    }, 1000)
    
    this.listStudent.reset()
  }

  update(): void{

    if(this.newName === "" || this.newName === ""){
      alert(
        "Valores incompletos, informe todos os dados para continuar"
      )
    }
    else{
      const update = [
        { 
          matricola: this.matricola,
          name: this.newName,
          email: this.newEmail
        }
      ]

      this.listStudent.updateStudents(update)

      alert("Aluno atualizado com sucesso.")
      this.newEmail = ""
      this.newName = ""

      this.abort()
    }
    
    //console.log(this.matricola)
  }
}
