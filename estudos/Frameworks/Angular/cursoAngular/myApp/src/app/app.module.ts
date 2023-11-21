import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";  
import { HttpClient } from "@angular/common/http";

import { routes } from './app.routes'
import { AlunoComponent } from "./components/aluno/aluno.component";
import { CreateStudentComponent } from "./components/create-student/create-student.component";
import { UpdateStudentComponent } from "./components/update-student/update-student.component";
import { StudentsService } from "./services/students.service";

import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        AlunoComponent,
        CreateStudentComponent,
        UpdateStudentComponent,
  
    ],
    imports:[
        HttpClientModule,
        FormsModule,
        BrowserModule,
        routes,
    ],  
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModules{}