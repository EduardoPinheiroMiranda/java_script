import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  
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
