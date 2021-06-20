import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../models/service.model';

@Component({
  selector: 'app-servicecard',
  templateUrl: './servicecard.component.html',
  styleUrls: ['./servicecard.component.css']
})
export class ServicecardComponent implements OnInit {
  @Input('service') service: Service;
  // @Input('svcId') svcId: string;
  // @Input('title') title: string;
  // @Input('heading') heading: string;
  // @Input('description') description: string;
  

  @Output() articleEmitter = new EventEmitter<Service>();

  constructor(private _router: Router) { }

  ngOnInit() {
  console.log("Card: ", this.service);
  }


  componentRedirect(svcId:string){
    event.preventDefault();
    this._router.navigate(['services/', this.service.svcId]);
    // console.log(this.svcId, this.title, this.heading, this.description);
    // this.articleEmitter.emit(this.service);

  }
}
