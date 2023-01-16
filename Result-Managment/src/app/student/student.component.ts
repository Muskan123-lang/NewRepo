import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { model } from '../models/model';
import { ServiceService } from '../sevice/service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentdata!:model[];
  submitdata:model={
   
    rollNo:0,
    name:'',
    dateOfBirth: '',
    score:0
  };
  public message: string | undefined;
  constructor(private studentservices:ServiceService,private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {

  }


  getResult(rollNo:number,name:string){
    this.studentservices.getStudent().subscribe(
      (response)=>{
        this.studentdata=response;
        console.log(this.studentdata);
        if(this.studentdata=this.studentdata.filter(item=>item.rollNo == rollNo)){
        this._router.navigate(['student/find-result'+'/'+this.submitdata.rollNo]);
      }else{
        this.message=this.studentservices.getMessage();
      }

    });
  }
  gotosearch(){
    this._router.navigate(['student']);
  }


}
