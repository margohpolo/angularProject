import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";


@Injectable()
export class ContactService {

    
    ForbiddenUsernames:string[] = ['Mark', 'Lucifer'];
    
    constructor() {}

    forbiddenNames(control: FormControl): {[s: string]: boolean} {
        if (this.ForbiddenUsernames.indexOf(control.value) !== -1) {
            return {'nameIsForbidden': true};
        }
        return null;
    }

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