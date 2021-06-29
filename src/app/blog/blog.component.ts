import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { filter, map, single } from 'rxjs/operators';
import { BlogService, Post } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  allPost$: Observable<Post[]>;
  // postEmit:Post;
  // allPost$: Subscription;

  constructor(private blogService: BlogService, private _router: Router) { }

  ngOnInit() {
    // this.allPost$ = this.blogService.getAllPosts().pipe(map(res => res)).subscribe(res => res);
    this.allPost$ = this.blogService.getAllPosts();
    console.log(typeof this.allPost$, this.allPost$);
  }

  componentRedirect(postId:string){
    event.preventDefault();
    // this.allPost$.pipe(map(p => p.find(p => p.id == Number(postId)))).subscribe(res => this.postEmit = res);
    // console.log("Click:", this.postEmit);
    // this.blogService.postEmitter.emit(this.postEmit);
    this._router.navigate(['blog/', postId]);
    // console.log(this.svcId, this.title, this.heading, this.description);
    // this.articleEmitter.emit(this.service);

  }



}
