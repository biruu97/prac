import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
email:string;
f:number=0;
f1:number=0;
otp:string;
pass:string;
repass:string;
gototp:string="*";
user:User;
msg;
  constructor(private userService:UserService) {

   }

  getotp()
  {
      this.userService.getNewOTP().subscribe((data)=>{this.gototp=<string>data;
        this.f=1;
      });
  }

  checkotp()
  {
        if(this.gototp==this.otp)
          this.f1=1;
        
  }
  updatePass()
  {
    this.user=new User();
    this.user.email=this.email;
    this.user.password=this.pass;
    console.log(this.user);
    this.userService.updatePass(this.user).subscribe((data)=>{this.msg=data;});
  }

  ngOnInit(): void {
  }

}
