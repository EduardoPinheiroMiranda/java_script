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
  index = 0
  
  constructor(private listStudents: StudentsService){
    this.loadData()
  }
  
  loadData(): void{
    this.students = this.listStudents.load()
    //console.log(this.students)
  }

  delite(matricola: string){
    this.listStudents.delite(matricola)
    this.loadData()
  }

  update(matricola: string){
    document.querySelector(".updateStudent")?.classList.add("moveright")
    document.querySelector(".showStudents")?.classList.add("moveright")

    this.listStudents.elementUpdate(matricola)
  }

  showInfo(index: Number): void{
    const x = Number(index)
    const info = document.querySelectorAll(".infoStudents")
    
    info.forEach((item)=>{
      item.classList.remove("showInfo")
    })

    info[x].classList.add("showInfo")

    setTimeout(()=>{
      info[x].classList.remove("showInfo")
    },10000)
  }
  
}
