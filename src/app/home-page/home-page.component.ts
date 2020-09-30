import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private myRoute:Router,private storeData:StoreDataService) { }

  applyNow()
  {
      this.storeData.currUser=new User();
      this.myRoute.navigate(['personaldetails']);
  }

  ngOnInit(): void {
  }

}
