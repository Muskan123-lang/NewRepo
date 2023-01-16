import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

import { AddRecordComponent } from './teacher/add-record/add-record.component';
import { StudentComponent } from './student/student.component';
import { FindResultComponent } from './student/find-result/find-result.component';
import { TeacherComponent } from './teacher/teacher.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TeacherComponent,
    HeaderComponent,
    AddRecordComponent,
    AddRecordComponent,
    StudentComponent,
    FindResultComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
