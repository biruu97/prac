import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { StoreDataService } from '../services/StoreDataService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
firstname:string;
middlename:string;
lastname:string;
phone:number;
dob;
gender:string;
nationality:string;
email:string;
password:string;
repass:string;
user:User;
flag:number=1;
msg;
recieve;
  constructor(private myUser1:StoreDataService,private userService:UserService,private myRoute1:Router) {
      if(this.myUser1.currUser.email!=null)
        {
          this.user=new User();
          this.user=this.myUser1.currUser;
          this.flag=0;
        }
      
   }

   gologin()
   {
     this.myRoute1.navigate(['userlogreg']);
   }
  submit()
  {
      if(this.user==null)
        this.userService.checkEmailfromAPI(this.email).subscribe((data)=>{
            this.recieve=data;
            console.log(this.recieve);
            if(this.recieve=="exists")
                this.msg="user exists!!";
            else
            {
               this.user=new User();
               this.user.email=this.email;
               this.user.password=this.password;
               this.user.privilege="user";
               console.log(this.user);
               this.userService.addUsertoAPIfromPersonal(this.user).subscribe((data1)=>{
                    this.msg=data1;
                    console.log(this.msg);
                    this.myUser1.currUser=this.msg;
                    this.myUser1.firstname=this.firstname;
                    this.myUser1.middlename=this.middlename;
                    this.myUser1.lastname=this.lastname;
                    this.myUser1.phone=this.phone;
                    this.myUser1.dob=this.dob;
                    this.myUser1.gender=this.gender;
                    this.myUser1.nationality=this.nationality;
                    this.myRoute1.navigate(['incomedetails']);
                     });
              }
          });
        else
        {
          this.myUser1.firstname=this.firstname;
          this.myUser1.middlename=this.middlename;
          this.myUser1.lastname=this.lastname;
          this.myUser1.phone=this.phone;
          this.myUser1.dob=this.dob;
          this.myUser1.gender=this.gender;
          this.myUser1.nationality=this.nationality;
          this.myRoute1.navigate(['incomedetails']);
        }
  }

  ngOnInit(): void {
  }

}
