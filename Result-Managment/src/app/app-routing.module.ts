import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddRecordComponent } from './teacher/add-record/add-record.component';
import { StudentComponent } from './student/student.component';
import { FindResultComponent } from './student/find-result/find-result.component';


const routes: Routes = [
  { path:'', component:UserComponent},
 
  {
    path:'teachercomponent',
    component:TeacherComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  
 
  {
    path:'teacher/addrecords',
    component:AddRecordComponent
  },
  {
    path:'teacher/addrecords/:rollNo',
    component:AddRecordComponent
  },

  {
    path:'studentcomponent',
    component:StudentComponent
  },
  {
    path:'student/find-result/:rollNo',
    component:FindResultComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'teacher',
    component:TeacherComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
