import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServiceSvc } from './services.service';
import { ServiceResolver } from './serviceresolver.service';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { ServicecardComponent } from './servicecard/servicecard.component';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
