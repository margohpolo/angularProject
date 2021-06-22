import { Component, Input, OnInit } from '@angular/core';
import { PageUser } from 'src/app/_helpers/interfaces/userDetails';

@Component({
  selector: 'app-signuplist',
  templateUrl: './signuplist.component.html',
  styleUrls: ['./signuplist.component.css']
})
export class SignuplistComponent implements OnInit {

  UserList: PageUser[];
  constructor() {
    console.log(this.UserList);
  }

  ngOnInit() {
    //console.log(this.UserList);
    //alert('ngOnInit');

  }

  // To Edit
  // ngOnInit() {
  //   this.userService.getAllUsers().subscribe(res => {
  //     console.log("All Users ", res);
  //     this.allUsers = res;
  //     this.loading = res.loading;
  //     this.errors = res.errors;
  //   });
  // }

  // ngOnDestroy() {
  //   this.userService.getAllUsers().unsubscribe();
  // }

  ngAfterViewChecked(){
    //alert('ngAfterViewChecked');
    if(this.UserList.length>0){
      console.log(this.UserList);
    }
  }

}
