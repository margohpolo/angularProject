import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  inputStr:string;
  inputNum:number;
  inputDate: Date = new Date(2018, 0O5, 0O5, 17, 23, 42, 11);

  constructor() { }

  ngOnInit() {
    this.inputStr = "Input String";
    this.inputNum = 4000;
    console.log(typeof this.inputDate.getDate, String(this.inputDate.getDate));
  }

}
