import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Students } from '../../Students';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})

export class AlunoComponent {
  @Input() students: Students[] = [
    {
      matricola: "",
      name: "",
      email: ""
    }
  ]
  

  delite(matricola: string): void{

    this.students = this.students.filter((student) => {
      return student.matricola !== matricola
    })

    console.log()
  }

}
