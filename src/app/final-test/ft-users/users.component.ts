import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class FTUsersComponent implements OnInit {

  allUser$: Observable<User[]>;
  loading: boolean = true;
  errors: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getAllUsers().subscribe(res => {
    //   // console.log("Http Response: ", res);
    //   // console.log(typeof res);
    //   // console.log("Http Response Body Type: ", typeof res.body);
    //   // console.log(typeof res.body);
    //   this.allUsers = JSON.stringify(res);
    //   // this.loading = res.loading;
    //   // this.errors = res.errors;
    // });
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.allUser$ = this.userService.getAllUsers();
    console.log(typeof this.allUser$, this.allUser$);
  }


  // These 3: Click -> send to Modal, sometimes populating form -> Action/Cancel btn
  // use the data-target thingy
  addUser() {
    console.log("Add User triggered.");
  }

  editUser(userId:string) {
    console.log(`Edit User '$userId' triggered.`);
  }

  deleteUser(userId:string) {
    console.log(`Delete User '$userId' triggered.`);
  }

  ngOnDestroy() {
    // this.userService.getAllUsers().unsubscribe();
  }

}
