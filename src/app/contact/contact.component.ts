import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../_helpers/interfaces/userDetails';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted:boolean;
  usersData: Users;
  message: string = "This is child Message";
  @Output() PostData = new EventEmitter<Users>();
  @Input('user') user;
  @ViewChild('fname',{static: false,read:ElementRef}) username: ElementRef;
  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
   }

  ngOnInit() {
    //debugger;
    this.contactForm = this.formBuilder.group({
      username:['',Validators.required],
      useremail:['',[Validators.required,Validators.email]],
      contactMsg:['',Validators.required]
    });
    console.log("NgOnInit()");

  }
  get f(){
    return this.contactForm.controls;
  }
  handleSubmit(){
    this.submitted = true;
    //console.log(this.contactForm.value);
    this.usersData = this.contactForm.value;

    this.message = "handleSubmit()";

    //console.log(this.usersData);
    this.PostData.emit(this.usersData);
  }
  ngOnChanges(){
    console.log("OnChanges");
  }
  ngDoCheck(){
    console.log("DoCheck");
  }
  ngAfterViewInit(){
    // this.firstname.nativeElement.style.border = "3px dashed green";
  }

  onScroll(){
    console.log('On scroll in Contact Component');
  }

}
