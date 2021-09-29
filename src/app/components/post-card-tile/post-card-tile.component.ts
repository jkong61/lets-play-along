import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostComment } from 'src/app/models/post-comment';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-card-tile',
  templateUrl: './post-card-tile.component.html',
  styleUrls: ['./post-card-tile.component.css']
})
export class PostCardTileComponent implements OnInit {

  @Input() post?: Post;
  comments : PostComment[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    if (this.post) {
      this.postService.getPostComments(this.post)
      .subscribe(comments => this.comments = comments);
    }
    // need to call the service to get the comments and assign to self
  }
}
