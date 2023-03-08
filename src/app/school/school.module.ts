import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SchoolModule { }
