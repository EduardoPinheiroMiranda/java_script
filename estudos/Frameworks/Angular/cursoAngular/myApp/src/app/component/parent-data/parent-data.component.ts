import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent {
    @Input() nome: string = "";
    
    @Input() jogo! : {
      nome: string,
      size: string
    }
}
