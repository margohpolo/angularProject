import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef,ChangeDetectionStrategy,DoCheck,OnChanges, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from 'src/app/_helpers/loginservices/auth.service';

import { FormUser } from '../../_helpers/interfaces/userDetails';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupformComponent implements OnInit {
  // signUpForm: FormGroup;
  // submitted:boolean;
  // userData: FormUser;
  // message: string = "This is child Message";
  // @Output() PostData = new EventEmitter<FormUser>();
  // @Input('formuser') formuser;
  // @ViewChild('fname',{static: false,read:ElementRef}) firstname: ElementRef;
  // constructor(private formBuilder: FormBuilder) {
  //   this.submitted = false;
  //  }

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMsg = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {

    // this.signUpForm = this.formBuilder.group({
    //   username:['',Validators.required],
    //   email:['',[Validators.required,Validators.email]],
    //   password:['',Validators.required]
    // });

    // console.log("NgOnInit()");

  }

  get f(){
    return this.form.controls;
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      }, err => {
        this.errorMsg = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  // handleSubmit(){
  //   this.submitted = true;
  //   //console.log(this.registerForm.value);
  //   this.userData = this.signUpForm.value;

  //   this.message = "This is child Message Updated";

  //   //console.log(this.usersData);
  //   this.PostData.emit(this.userData)
  // }
  ngOnChanges(){
    console.log("CHANGES")
  }
  ngDoCheck(){
    console.log("DO CHECK")
  }
  ngAfterViewInit(){
    // this.firstname.nativeElement.style.border = "3px dashed green";
  }

  onScroll(){
    console.log('On scroll in Signup Component');
  }

}
