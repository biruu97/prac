import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../models/application';
import { BankDetail } from '../models/bankDetail';
import { LoanDetails } from '../models/loanDetail';
import { PersonalDetails } from '../models/pesonalDetails';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
curruser:User;
PrevRec;
PerDet;
BankDet;
LoanDet;
flag1:number=0;
flag2:number=0;
flag3:number=0;
  constructor(private myuser:StoreDataService,private userService:UserService,private myRoute:Router) {
    this.curruser=new User();
    this.curruser=this.myuser.currUser;
    this.BankDet=new BankDetail();
    this.PrevRec=new Application();
    this.PerDet=new PersonalDetails();
    this.LoanDet=new LoanDetails();
    this.userService.getPreviousRecords(this.curruser).subscribe((data)=>{
      this.PrevRec=<Application>data;
    });
    this.userService.getPersonalDetails(this.curruser).subscribe((data)=>{
      this.PerDet=<PersonalDetails>data;
    });
    this.userService.getBankDetails(this.curruser).subscribe((data)=>{
      this.BankDet=<BankDetail>data;
    });
    this.userService.getLoanDetails(this.curruser).subscribe((data)=>{
      this.LoanDet=<LoanDetails>data;
    });
   }

  toggleHistories1()
  {
    this.flag1=1-this.flag1;
  }
  toggleHistories2()
  {
    this.flag2=1-this.flag2;
  }
  toggleHistories3()
  {
    this.flag3=1-this.flag3;
  }
  
  applyNow()
  {
      this.myRoute.navigate(['personaldetails']);
  }

  ngOnInit(): void {
  }

}