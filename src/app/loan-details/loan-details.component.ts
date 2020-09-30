import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eligibility } from '../models/eligibility';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
loanwanted:number;
tenure:number;
rate:number;
eligibleamount:number;
currsal:number;
elib:Eligibility;
  constructor(private sd:StoreDataService,private userService:UserService,private myRoute:Router) {

      
   }

   checkElib()
   {
      this.elib=new Eligibility();
      this.elib.sal=this.currsal;
      this.elib.user=this.sd.currUser;
      this.userService.getEligibleAmtFromAPI(this.elib).subscribe((data)=>{
      this.eligibleamount=36*(this.currsal-<number>data);
      if(this.eligibleamount<0)
      {
        this.eligibleamount=0;
        
      }
    });
   }


   goNext()
   {
     this.sd.loanwanted=this.loanwanted;
     this.sd.tenure=this.tenure;
     this.sd.rate=this.rate;
     this.sd.eligibleamount=this.eligibleamount;
     this.myRoute.navigate(['bankdetails']);
   }

  ngOnInit(): void {
  }

}
