import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  matricola: string = "";
  name: string = "";
  email: string = "";
}
