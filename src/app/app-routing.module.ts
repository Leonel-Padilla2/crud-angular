import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { EditEmployeeComponent } from './component/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { HomeEmployeeComponent } from './component/home-employee/home-employee.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'add-employee'},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'list-employees', component: ListEmployeeComponent},
  {path: 'edit-employee/:id', component: EditEmployeeComponent},
  {path: 'home-employee', component: HomeEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
