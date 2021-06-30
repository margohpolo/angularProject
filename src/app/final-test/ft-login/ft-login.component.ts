import { Component, OnInit } from '@angular/core';
import { FTAuthService } from '../ft-loginservices/ft-auth.service';
import { FTTokenStorageService } from '../ft-loginservices/ft-token-service.service';

@Component({
  selector: 'app-ft-login',
  templateUrl: './ft-login.component.html',
  styleUrls: ['./ft-login.component.css']
})
export class FtLoginComponent implements OnInit {

  
  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMsg:string;
  roles:string[];

  constructor(private authService: FTAuthService, private tokenStorage: FTTokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(){
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      }, err => {
        this.errorMsg = err.error.message;
        this.isLoginFailed = true;
      }
    );

  }

  reloadPage() { window.location.reload(); }

}
