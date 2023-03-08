import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// @ts-ignore
import { SchoolComponent } from './dashboard/school/school.component';
// @ts-ignore
import { CreateSchoolComponent } from './dashboard/create-school/create-school.component';
// @ts-ignore
import { UpdateSchoolComponent } from './dashboard/update-school/update-school.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./school/dashboard/dashboard.component";

const appRoutes: Routes = [
  {
    path: 'school',
    component: DashboardComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
