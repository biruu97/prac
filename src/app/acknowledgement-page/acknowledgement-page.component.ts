import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDataService } from '../services/StoreDataService';

@Component({
  selector: 'app-acknowledgement-page',
  templateUrl: './acknowledgement-page.component.html',
  styleUrls: ['./acknowledgement-page.component.css']
})
export class AcknowledgementPageComponent implements OnInit {
appid:number;
  constructor(private sd:StoreDataService,private myRoute:Router) {
    this.appid=this.sd.accno;
    this.sd.accno=null;
   }

   home()
   {
     this.myRoute.navigate(['*']);
   }
  ngOnInit(): void {
  }

}
