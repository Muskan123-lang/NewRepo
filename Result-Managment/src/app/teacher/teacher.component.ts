import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { model } from '../models/model';
import { ServiceService } from '../sevice/service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  studentdata!:model[];
  

  submitdata:model={
    
    rollNo:0,
    name:'',
    dateOfBirth: '',
    score:0
  };


  constructor(private serviceservice:ServiceService,private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {
    this.GetStudent();
  }

  addrecord():void{
    this._router.navigate(['teacher/addrecords']);

  }

  GetStudent(){
    this.serviceservice.getStudent().subscribe(
      (response)=>{
        this.studentdata=response;
    }

    );
  }
  logout():void{
    this._router.navigate(['login']);
  }

  ondelete(rollNo:number){
    this.serviceservice.onDelete(rollNo).subscribe(response=>
      {
      this.studentdata=this.studentdata.filter(item=>item.rollNo!==rollNo);
      this.GetStudent();
      this.submitdata={
     
        rollNo:0,
        name:'',
        dateOfBirth: '',
        score:0,
      };
    });
  }

  populateFrom(student:model,rollNo:number){
    this.serviceservice.onUpdate(student,rollNo).subscribe(response=>
      {
      this.submitdata=student;
      this._router.navigate(['teacher/addrecords'+'/'+this.submitdata.rollNo]);
  
      
    });

 

  
    
  }
}


