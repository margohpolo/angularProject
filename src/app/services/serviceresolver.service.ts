import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Service } from './models/service.model';
import { ServiceSvc } from './services.service';

@Injectable()
export class ServiceResolver implements Resolve<Service> {
    
    constructor(private serviceSvc: ServiceSvc) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Service {
        return this.serviceSvc.getServiceById(route.params['svcId']);
    }

}