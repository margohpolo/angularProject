import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlogService, Post } from '../blog.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  // @Input('postEmitter') post: Post;
  post:Post;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  
  

  ngOnInit() {
    // this.blogService.getPostById(this.postId).subscribe(res => this.post = res);
    this.blogService.getPostById(Number(this.route.snapshot.paramMap.get('postId'))).subscribe(data => this.post = data);

    // // // // Add Resolver
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.post = data['post'];
    //   }
    // );

    console.log("Single:", this.post);
  }

  ngOnDestroy() {
    // unsubscribe
  }

}
