import { Component, OnInit } from '@angular/core';
import { FTUserService } from '../ft-loginservices/ft-user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './ft-board-admin.component.html',
  styleUrls: ['./ft-board-admin.component.css']
})
export class FTBoardAdminComponent implements OnInit {
  content = '';

  constructor(private userService: FTUserService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
