import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import {UserService} from '../services/UserService';
import {StoreDataService} from '../services/StoreDataService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login-register',
  templateUrl: './user-login-register.component.html',
  styleUrls: ['./user-login-register.component.css']
})
export class UserLoginRegisterComponent implements OnInit {
user:User;
userlogin:User;
rePass:string;
msg;
msglogin;
flag:string;
priviledge:string;
  constructor(private myRouter:Router,private userService:UserService,private storedata:StoreDataService) {
    this.user=new User();
    this.userlogin=new User();
   }

   doLogin()
   {
     this.msg="";
     this.msglogin="";
     this.flag="";
     this.userService.getLoginfromAPI(this.userlogin).subscribe((data)=>
     {
          this.msglogin=data;
          if(this.msglogin==null)
            this.flag="USER DOESNT EXISTS!";
          else
          {
            this.flag="";
            this.storedata.currUser=new User();
            this.storedata.currUser=this.msglogin;
            this.myRouter.navigate(['userhome']);
          }
            
     });
   }
   doRegister()
   {
      this.userService.addUsertoAPI(this.user).subscribe((data)=>this.msg=data);
   }

   forgotpass()
   {
    this.myRouter.navigate(['forgot']);
   }

  ngOnInit(): void {
  }

}
