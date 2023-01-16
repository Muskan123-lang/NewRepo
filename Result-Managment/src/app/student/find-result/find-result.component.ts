import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { model } from 'src/app/models/model';
import { ServiceService } from 'src/app/sevice/service.service';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {

  dataa:model[]=[];
  submitdata:model={
   
    rollNo:0,
    name:'',
    dateOfBirth: '',
    score:0
  };
  message: string="hey! i am";
  constructor(private studentservices:ServiceService,private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {
    this.studentservices.setMessage(this.message);

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

  gotosearch(){
    this._router.navigate(['student']);
  }


}
