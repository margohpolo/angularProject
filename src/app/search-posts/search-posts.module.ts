import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SearchPostsRoutingModule } from "./search-posts-routing.module";
import { SearchPostsComponent } from "./search-posts.component";
import { SearchPostsPipe } from "./search-posts.pipe";


@NgModule({
    declarations: [SearchPostsComponent, SearchPostsPipe],
    imports: [CommonModule, SearchPostsRoutingModule, FormsModule, ReactiveFormsModule],
    providers: []
})

export class SearchPostsModule {}