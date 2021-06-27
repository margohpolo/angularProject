import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SinglepostComponent } from './singlepost/singlepost.component';



@NgModule({
  declarations: [BlogComponent, SinglepostComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [
      
  ]
})
export class BlogModule { }
