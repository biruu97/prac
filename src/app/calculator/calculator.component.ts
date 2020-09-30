import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  amount:number=0;
  tenure:number=10;
  rate:number=10;
  salary:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
