import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
fname:string;
lname:string;
message:string;
email:string;
  message:string;
 
  constructor() { 

  }
  messagedisplay()
  {
    this.message="Your details have been submitted.Thank you!!!"
    this.fname=null;
    this.email=null;
    this.message=null;
    this.lname=null;
  }

  ngOnInit(): void {
    this.message=null;
  }

}