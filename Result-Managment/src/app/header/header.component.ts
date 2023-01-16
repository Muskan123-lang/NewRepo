import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _router:Router){

  }

  ngOnInit(): void {
  }

  logout():void{
    this._router.navigate(['user']);
  }

}
