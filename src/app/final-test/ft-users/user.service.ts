import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export interface Users {
    isAvailable: boolean;
    users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userSelected = new EventEmitter<User>();
    
    myAppUrl: string;
    myApiUrl: string;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
    })
  };

    constructor(private http: HttpClient) {        
      this.myAppUrl = environment.typiCodeUrl;
      this.myApiUrl = '/users';
    }

    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
        } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    getAllUsers():Observable<User[]> {
        // return this.http.get<User[]>(environment.mockendUsersUrl + "users", {observe: 'response'});
        return this.http.get<User[]>(this.myAppUrl + this.myApiUrl)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }

    getUserById(userId:number):Observable<User> {
        // return this.http.get<User>(`${environment.mockendUsersUrl}/users/${userId}`, {observe: 'response'}).pipe(map(res => res));
        return this.http.get<User>(this.myAppUrl + this.myApiUrl + '/' + userId)
            .pipe(
            retry(1),
            catchError(this.errorHandler)
            );
    }
    

    createUser(userDetails:User):Observable<User> {
        // return this.http.post<User>(`${environment.mockendUsersUrl}/users`, userDetails);
        return this.http.post<User>(this.myAppUrl + this.myApiUrl, JSON.stringify(userDetails), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }

    updateUser(userId:number, userUpdate:User):Observable<User>{
        // const httpOptions = {
        // method: 'PUT',
        // body: JSON.stringify(userUpdate),
        // headers: new HttpHeaders({
        //     'Content-Type':  'application/json'
        // })
        // };

        // return this.http.put<User>(`${environment.mockendUsersUrl}/users/${userId}`, JSON.stringify(userUpdate), httpOptions);

        return this.http.put<User>(this.myAppUrl + this.myApiUrl + '/' + userId, JSON.stringify(userUpdate), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }
        
    deleteUser(userId:number):Observable<User>{
        // return this.http.delete<User>(`${environment.mockendUsersUrl}/users/${userId}`);
        return this.http.delete<User>(this.myAppUrl + this.myApiUrl + '/' + userId)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }
    

}