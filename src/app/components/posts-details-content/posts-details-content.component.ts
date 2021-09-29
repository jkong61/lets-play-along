import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-details-content',
  templateUrl: './posts-details-content.component.html',
  styleUrls: ['./posts-details-content.component.css']
})
export class PostsDetailsContentComponent implements OnInit, OnDestroy {

  @Input() itemTracker: number[] = [0,0];
  localPosts:Post[] = [];

  private ngUnSubscribeSubject = new Subject();
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.postList$
    .pipe(takeUntil(this.ngUnSubscribeSubject))
    .subscribe(posts => this.localPosts = posts);
  }

  ngOnDestroy(): void {
    this.ngUnSubscribeSubject.next();
    this.ngUnSubscribeSubject.complete();
  }
}
