import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// @ts-ignore
import { SchoolComponent } from './dashboard/school/school.component';
// @ts-ignore
import { CreateSchoolComponent } from './dashboard/create-school/create-school.component';
// @ts-ignore
import { UpdateSchoolComponent } from './dashboard/update-school/update-school.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
