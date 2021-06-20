import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Service } from '../models/service.model';
import { ServiceSvc } from '../services.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  // @Input('service') service: Service;
  selectedService: Service;

  constructor(private serviceSvc: ServiceSvc, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.serviceSvc.svcSelected.subscribe(
    //   (service: Service) => {
    //     this.selectedService = service;
    //   });

    this.route.data.subscribe(
      (data: Data) => {
        this.selectedService = data['svc'];
      }
    );
    
    console.log(this.selectedService);
    console.log(this.selectedService.svcId, this.selectedService.title, this.selectedService.heading, this.selectedService.description);
  }

  ngOnDestroy() {
    this.serviceSvc.svcSelected.unsubscribe();
  }

}
