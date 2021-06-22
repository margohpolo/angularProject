import { Component, OnInit } from '@angular/core';

// import { SignupformComponent } from '../signupform/signupform.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  allUser = [];
  usersFromChild=[];
  user = {
    name:"Alex"
  }
  // @ViewChild(SignupformComponent,{static: true}) child;
  //@ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
  //@ViewChild('nameInput',{static: false,read:ElementRef}) someInput: ElementRef;

  constructor() { }
  ngOnInit(){
    //console.log(this.child.usersData);
    //this.firstname.nativeElement.style.border = "3px dashed green";
  }

  getRegisteredUser(event){
    this.allUser.push(event);
    // console.log('List of registedred users');
    // console.log(this.allUser);
  }

  ngAfterViewInit(){
    // this.usersFromChild = this.child.message;

    //this.someInput.nativeElement.value = "Jugal";
    //this.firstname.nativeElement.style.border = "3px dashed green";
  }
  ngAfterViewChecked(){
    // this.usersFromChild = this.child.usersData;
    // console.log(this.usersFromChild);
  }
  updateUser(){
    this.user.name = "Murali";
  }

}
