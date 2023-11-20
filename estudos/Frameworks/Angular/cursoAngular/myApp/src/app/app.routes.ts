import { Routes } from '@angular/router';
import { AlunoComponent } from './components/aluno/aluno.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';

export const routes: Routes = [
    { path : '', component: AlunoComponent},
    { path: 'add', component: CreateStudentComponent},
    { path: 'update', component: UpdateStudentComponent}
];

