import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-show-previous-historiesfor-user',
  templateUrl: './show-previous-historiesfor-user.component.html',
  styleUrls: ['./show-previous-historiesfor-user.component.css']
})
export class ShowPreviousHistoriesforUserComponent implements OnInit {
@Input() curruser:User;
records;
  constructor(private userService:UserService) { 
    console.log("in show prev="+this.curruser);
    this.userService.getPreviousRecords(this.curruser).subscribe((data)=>{
      this.records=data;
      console.log(this.records);
    });
  }

  ngOnInit(): void {
  }

}
