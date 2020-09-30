import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  message:string;
 
  constructor() { 

  }
  messagedisplay()
  {
    this.message="Your details have been submitted.Thank you!!!"
  }

  ngOnInit(): void {
    this.message=null;
  }

}