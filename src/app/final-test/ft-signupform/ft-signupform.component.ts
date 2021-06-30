import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef,ChangeDetectionStrategy,DoCheck,OnChanges, Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { FTAuthService } from '../ft-loginservices/ft-auth.service';


@Component({
  selector: 'app-ft-signupform',
  templateUrl: './ft-signupform.component.html',
  styleUrls: ['./ft-signupform.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FTSignupformComponent implements OnInit {
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

  constructor(private authService: FTAuthService) {}

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


  ngOnChanges(){
    
  }
  ngDoCheck(){
    
  }
  ngAfterViewInit(){
    
  }

  onScroll(){
    console.log('On scroll in Signup Component');
  }

}
