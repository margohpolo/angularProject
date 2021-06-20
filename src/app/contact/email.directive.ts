import { Directive } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";


@Directive({
    selector: '[eMail]'
})

export class EmailDirective {

    
    constructor() {}

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
        if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
        } else {
            resolve(null);
        }
        }, 1500);
    });
    return promise;
    }

}