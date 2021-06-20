import { Directive } from "@angular/core";
import { FormControl } from "@angular/forms";


@Directive({
    selector: '[userName]'
})

export class UsernameDirective {

    
    ForbiddenUsernames:string[] = ['Mark', 'Lucifer'];
    
    constructor() {}


    forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.ForbiddenUsernames.indexOf(control.value) !== -1) {
        return {'nameIsForbidden': true};
    }
        return null;
    }

}