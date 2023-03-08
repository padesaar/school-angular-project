import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    DashboardComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent
  ],
    imports: [
        CommonModule,
        MatTableModule
    ]
})
export class SchoolModule { }
