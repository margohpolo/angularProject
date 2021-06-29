import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'manyTypes'
})
export class ManyTypesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let resType:string = "Unknown Type";
    
    if(value instanceof Date) {
      resType = "Date Object";
    }
    else if(typeof value === 'string'){
      resType = "string";
    }
    else if (typeof value === 'number') {      
      resType = "number";
    }
    else if (typeof value === 'object') {
      resType = "object";
    }


    return `Value is a ${resType}: ${value}`;
  }

}
