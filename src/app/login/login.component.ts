import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_helpers/loginservices/auth.service';
import { TokenStorageService } from '../_helpers/loginservices/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMsg:string;
  roles:string[];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(){
    // event.preventDefault();
    // console.log(this.user);
    // console.log(this.pass);
    // sessionStorage.setItem('Username',this.user);
    // sessionStorage.setItem('Password',this.pass);
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
