import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {
  }

  gotostudent():void{
    this._router.navigate(['studentcomponent']);

  }

  gototeachereditdata():void{
    this._router.navigate(['teachercomponent']);
  }

}
