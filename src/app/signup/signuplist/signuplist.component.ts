import { Component, Input, OnInit } from '@angular/core';
import { PageUser } from 'src/app/_helpers/interfaces/userDetails';

@Component({
  selector: 'app-signuplist',
  templateUrl: './signuplist.component.html',
  styleUrls: ['./signuplist.component.css']
})
export class SignuplistComponent implements OnInit {

  @Input('userList') UserList: PageUser[];
  constructor() {
    console.log(this.UserList);
  }

  ngOnInit() {
    //console.log(this.UserList);
    //alert('ngOnInit');
  }
  ngAfterViewChecked(){
    //alert('ngAfterViewChecked');
    if(this.UserList.length>0){
      console.log(this.UserList);
    }
  }

}
