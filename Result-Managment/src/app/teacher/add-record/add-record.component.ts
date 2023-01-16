import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { model } from 'src/app/models/model';
import { ServiceService } from 'src/app/sevice/service.service';


@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  studentdata:model[]=[];
  submitdata:model={
    
    rollNo:0,
    name:'',
    dateOfBirth: '',
    score:0
  };




  constructor(private studentservices:ServiceService,private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {
    this.studentservices.getUsersByRollNo(this._route.snapshot.params['rollNo']).subscribe((result)=>{
      console.log(result);
      this.submitdata={
       
        rollNo:result.rollNo,
        name:result.name,
        dateOfBirth: result.dateOfBirth,
        score:result.score,
      };
    });
  }

  GetStudent(){
    this.studentservices.getStudent().subscribe(
      (response)=>{
        this.studentdata=response;
    }

    );
  }

  onSubmit(){

    this.studentservices.addStudent(this.submitdata).subscribe(
      (response)=>{
        this.GetStudent();
        this.submitdata={
        
          rollNo:0,
          name:'',
          dateOfBirth: '',
          score:0,
        };
        this._router.navigate(['teacher']);
      }
    )
  }

  gotolist(){
    this._router.navigate(['teacher']);
  }


}
