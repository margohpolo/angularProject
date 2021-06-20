import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import { Service } from './models/service.model';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { ServicecardComponent } from './servicecard/servicecard.component';
import { ServiceSvc } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceSvc]
})
export class ServicesComponent implements OnInit {

  allServices: Service[];
  @ViewChild(PlaceholderDirective, { static: true }) serviceCardsPlaceholder: PlaceholderDirective;


  constructor(private serviceSvc: ServiceSvc, private componentFactoryResolver: ComponentFactoryResolver) {}


  private GenerateCards(allServices:Service[], placeholder:PlaceholderDirective):void {
    const cardComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ServicecardComponent);
    const hostViewContainerRef = placeholder.viewContainerRef;
    // hostViewContainerRef.clear();
    // var allCards;
    for(let svc of this.allServices) {
      const componentRef = hostViewContainerRef.createComponent(cardComponentFactory);
      componentRef.instance.service = svc;
      // allCards.push(componentRef);
    } 
  }   


  ngOnInit() {
    this.allServices = this.serviceSvc.getAllServices();
    console.log("Services: ", this.allServices);
    console.log("Placeholder: ", this.serviceCardsPlaceholder)
    this.GenerateCards(this.allServices, this.serviceCardsPlaceholder);
  }
  trackByFn(index){
    return index;
  }

  ngOnDestroy() {
    this.serviceCardsPlaceholder.viewContainerRef.clear();
  }


}
