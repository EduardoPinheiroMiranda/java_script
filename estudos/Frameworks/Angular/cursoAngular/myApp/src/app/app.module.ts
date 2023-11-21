import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
import { HttpClient } from "@angular/common/http";

import { AlunoComponent } from "./components/aluno/aluno.component";
import { CreateStudentComponent } from "./components/create-student/create-student.component";
import { UpdateStudentComponent } from "./components/update-student/update-student.component";

import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AlunoComponent,
        CreateStudentComponent,
        UpdateStudentComponent,
  
    ],
    imports:[
        HttpClientModule,
        FormsModule,
        BrowserModule
    ],  
    providers: [HttpClient],
    bootstrap: [AppComponent]
})

export class AppModules{}