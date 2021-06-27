import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService, Post } from '../blog.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  @Input('postIdEmitter') postId: number;

  constructor(private blogService: BlogService) { }

  post$: Observable<Post>;
  

  ngOnInit() {
    // this.blogService.getPostById(this.postId).subscribe(res => this.post = res);
    this.post$ = this.blogService.getPostById(this.postId);
    console.log(this.post$);
  }

}
