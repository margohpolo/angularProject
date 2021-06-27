import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService, Post } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  allPost$: Observable<Post[]>;
  // allPost$: Subscription;

  constructor(private blogService: BlogService, private _router: Router) { }

  @Output() postIdEmitter = new EventEmitter<number>();

  ngOnInit() {
    // this.allPost$ = this.blogService.getAllPosts().pipe(map(res => res)).subscribe(res => res);
    this.allPost$ = this.blogService.getAllPosts()
    console.log(typeof this.allPost$, this.allPost$);
  }

  componentRedirect(postId:string){
    event.preventDefault();
    this._router.navigate(['blog/', postId]);
    // console.log(this.svcId, this.title, this.heading, this.description);
    // this.articleEmitter.emit(this.service);

  }



}
