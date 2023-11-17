import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frist-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frist-component.component.html',
  styleUrl: './frist-component.component.css'
})
export class FristComponentComponent {
  name: string = "Eduardo"
}
