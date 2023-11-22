import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentsService } from '../../services/students.service';

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
  newName = ''
  newEmail = ''

  matricola: string = ""

  constructor(private listStudent: StudentsService){
    this.loadupdate()
  }

 

  loadupdate(): void{
    //this.matricola = this.listStudent.loadUpdate()

    
  }


  update(): void{

    if(this.newName === "" || this.newName === ""){
      alert(
        "Valores incompletos, informe todos os dados para continuar"
      )
    }
    else{
      
    }
    
    //console.log(this.matricola)
  }
}
