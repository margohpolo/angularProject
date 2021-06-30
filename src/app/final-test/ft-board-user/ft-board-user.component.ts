import { Component, OnInit } from '@angular/core';
import { FTUserService } from '../ft-loginservices/ft-user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './ft-board-user.component.html',
  styleUrls: ['./ft-board-user.component.css']
})
export class FTBoardUserComponent implements OnInit {
  content = '';

  constructor(private userService: FTUserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
