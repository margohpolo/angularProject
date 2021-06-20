import { EventEmitter, Injectable } from "@angular/core";

import { Service } from "./models/service.model";

@Injectable()
export class ServiceSvc {
    svcSelected = new EventEmitter<Service>();

    private allServices: Service[] = [
        {svcId: 'supply-chain',
        title:'Supply Chain',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {svcId: 'banking',
      title:'banking',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {svcId: 'ai', 
        title:'Artificial intelligence',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      },
      {svcId: 'business',
        title:'Business Strategy',
        heading:'Lorem Ipsum is simply dummy',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.`
      }
    ];

    constructor() {}

    getAllServices() {
        return this.allServices;
    }

    getServiceById(sId:string) {
        return this.allServices.find(p => p.svcId == sId);
    }

}