import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FristComponentComponent } from './component/frist-component/frist-component.component';
import { ParentDataComponent } from './component/parent-data/parent-data.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FristComponentComponent,
    ParentDataComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "eduardo";

  game = {
    nome: "jogo",
    size: "1g"
  };

  title = 'myApp';
}
