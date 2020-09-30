import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
user:User;
userFromAPI;
msg:string;
  constructor(private userService:UserService,private storedata:StoreDataService,private myRoute:Router) {
    this.user=new User();
   }

  ngOnInit(): void {
  }
  doLogin()
  {
    this.msg="";
    this.userService.getLoginfromAPI(this.user).subscribe((data)=>{
        this.userFromAPI=data;
        if(this.userFromAPI==null || this.userFromAPI.privilege=="user")
            this.msg="ADMIN USER DOESNT EXISTS!!";
        else
        {
          this.msg="";
          this.storedata.currUser=this.userFromAPI;
          this.myRoute.navigate(['adminhome']);
        }
    });
  }
}
