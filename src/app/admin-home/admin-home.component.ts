import { Component, OnInit } from '@angular/core';
import { Application } from '../models/application';
import { IncomeDetail } from '../models/incomeDetail';
import { LoanApprover } from '../models/loanApprover';
import { LoanDetails } from '../models/loanDetail';
import { Mydocuments } from '../models/mydocuments';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  currUser:User;
  needApproval;
  incDet;
  loanDet;
  flag1:number=0;
  flag2:number=0;
  flag3:number=0;
  flag4:number=0;
  remarks:string;
  link:string="http://localhost:61494/api/GetImage?requiredName=";
  currdoc;
  newLoanApprove:LoanApprover;
  name;
  msg;
    constructor(private storeData:StoreDataService,private userService:UserService) {
      this.currUser=new User();
      this.currUser=this.storeData.currUser;
      this.storeData.currUser=new User();
      this.userService.getApplicationsForApproval(this.currUser).subscribe((data)=>{
        this.needApproval=data;
        this.userService.getIncomeDetailsForApproval(this.currUser).subscribe((data1)=>{
          this.incDet=data1;
          this.userService.getLoanDetailsForApproval(this.currUser).subscribe((data2)=>{
            this.loanDet=data2;
            this.userService.getDocuments(this.currUser).subscribe((data3)=>{
                  this.currdoc=data3;
            });
          });
        });
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

    toggleHistories4()
    {
      this.flag4=1-this.flag4;
    }

    approve(rec:Application)
    {
      this.newLoanApprove=new LoanApprover();
      this.newLoanApprove.remarks=this.remarks;
      this.newLoanApprove.newApplication=rec;
      this.newLoanApprove.adminId=this.currUser.id;

      console.log(this.newLoanApprove);

      this.userService.approveLoan(this.newLoanApprove).subscribe((data3)=>{
        this.msg=data3;
        this.remarks="";
        this.userService.getApplicationsForApproval(this.currUser).subscribe((data)=>{
          this.needApproval=data;
          this.userService.getIncomeDetailsForApproval(this.currUser).subscribe((data1)=>{
            this.incDet=data1;
            this.userService.getLoanDetailsForApproval(this.currUser).subscribe((data2)=>{
              this.loanDet=data2;
              this.userService.getDocuments(this.currUser).subscribe((data3)=>{
                    this.currdoc=data3;
              });
            });
          });
        });
      });
    }

    disapprove(rec:Application)
    {
      this.userService.disapproveLoan(rec).subscribe((data3)=>{
        this.msg=data3;
        this.remarks="";
        this.userService.getApplicationsForApproval(this.currUser).subscribe((data)=>{
          this.needApproval=data;
          this.userService.getIncomeDetailsForApproval(this.currUser).subscribe((data1)=>{
            this.incDet=data1;
            this.userService.getLoanDetailsForApproval(this.currUser).subscribe((data2)=>{
              this.loanDet=data2;
              this.userService.getDocuments(this.currUser).subscribe((data3)=>{
                this.currdoc=data3;
                });
            });
          });
        });
      });
    }
  
    ngOnInit(): void {
    }
  
  }
