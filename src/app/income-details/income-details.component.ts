import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreDataService } from '../services/StoreDataService';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {
  proploc:string;
  propname:string;
  propamt:number;
  orgtype:string;
  retage:number;
  emptype:string;
  empname:string;
  constructor(private storeData:StoreDataService,private myRoute:Router) {
    
   }

  ngOnInit(): void {
  }

  goToNxtPg()
  {
    this.storeData.proploc=this.proploc;
    this.storeData.propname=this.propname;
    this.storeData.propamt=this.propamt;
    this.storeData.emptype=this.emptype;
    this.storeData.empname=this.empname;
    this.storeData.orgtype=this.orgtype;
    this.storeData.retage=this.retage;
    this.myRoute.navigate(['loandetails']);
  }

}
