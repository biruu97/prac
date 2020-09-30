import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StoreDataService} from '../services/StoreDataService';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
accno:number;
ifsc:string;
  constructor(private storedoc:StoreDataService,private myRoute:Router) { 
    
  }
  goToFinalPg()
  {
    this.storedoc.accno=this.accno;
    this.storedoc.ifsc=this.ifsc;
    this.myRoute.navigate(['docupload']);
  }

  ngOnInit(): void {
  }

}
