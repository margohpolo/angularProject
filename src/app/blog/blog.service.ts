import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface Posts {
    isAvailable: boolean;
    posts: Post[];
}


@Injectable({
  providedIn: 'root'
})
export class BlogService {
    
    myAppUrl: string;
    myApiUrl: string;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
    })
  };

    constructor(private http: HttpClient) {        
      this.myAppUrl = environment.mockendBlogUrl;
      this.myApiUrl = '/posts';
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

    getAllPosts():Observable<Post[]> {
        // return this.http.get<User[]>(environment.mockendUsersUrl + "users", {observe: 'response'});
        return this.http.get<Post[]>(this.myAppUrl + this.myApiUrl)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }

    getPostById(postId:number):Observable<Post> {
        // return this.http.get<User>(`${environment.mockendUsersUrl}/users/${userId}`, {observe: 'response'}).pipe(map(res => res));
        return this.http.get<Post>(this.myAppUrl + this.myApiUrl + '/' + postId)
            .pipe(
            retry(1),
            catchError(this.errorHandler)
            );
    }
    

    createPost(postDetails:Post):Observable<Post> {
        // return this.http.post<User>(`${environment.mockendUsersUrl}/users`, userDetails);
        return this.http.post<Post>(this.myAppUrl + this.myApiUrl, JSON.stringify(postDetails), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }

    updatePost(postId:number, postUpdate:Post):Observable<Post>{
        // const httpOptions = {
        // method: 'PUT',
        // body: JSON.stringify(userUpdate),
        // headers: new HttpHeaders({
        //     'Content-Type':  'application/json'
        // })
        // };

        // return this.http.put<User>(`${environment.mockendUsersUrl}/users/${userId}`, JSON.stringify(userUpdate), httpOptions);

        return this.http.put<Post>(this.myAppUrl + this.myApiUrl + '/' + postId, JSON.stringify(postUpdate), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }
        
    deletePost(postId:number):Observable<Post>{
        // return this.http.delete<User>(`${environment.mockendUsersUrl}/users/${userId}`);
        return this.http.delete<Post>(this.myAppUrl + this.myApiUrl + '/' + postId)
            .pipe(
                retry(1),
                catchError(this.errorHandler)
            );
    }
    

}