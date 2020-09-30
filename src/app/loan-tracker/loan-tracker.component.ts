import { Component, OnInit } from '@angular/core';
import { Application } from '../models/application';
import { LoanTrack } from '../models/loantrack';
import { LoanTrackService } from '../services/LoanTrackService';

@Component({
  selector: 'app-loan-tracker',
  templateUrl: './loan-tracker.component.html',
  styleUrls: ['./loan-tracker.component.css']
})
export class LoanTrackerComponent implements OnInit {
tracker:LoanTrack;
getValue;
app;
check:number;
  constructor(private loantrackservice:LoanTrackService) {
    this.tracker=new LoanTrack();
    this.check=0;
   }

  ngOnInit(): void {
  }

  fetchLoans()
  {
      this.check=1;
      this.loantrackservice.fetchAppfromAPI(this.tracker).subscribe((data)=>{this.app=data});
  }

}
