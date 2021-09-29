import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { PhotoService } from 'src/app/services/photo.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {

  isPostsActive: boolean = true;
  isAlbumsActive: boolean = false;
  numberOfPagesShouldPaginate: number = 0;

  // Used as a tracker to check the page index inconjunction
  // on number on limit of the number of paginated pages
  pageIndex: number = 0;

  // Used by the html components to track slices
  maxNumOfPosts: number = 4;
  maxNumOfAlbums: number = 6;

  firstAndLastItem: number[] = [0, this.isPostsActive ? this.maxNumOfPosts : this.maxNumOfAlbums ];

  // Used to remove dangling subscriptions to observer in the event component gets destroyed
  private ngUnSubscribeSubject = new Subject();
  private numOfPosts?: number;
  private numOfAlbums?: number;

  constructor(
    private postService: PostService,
    private albumService: PhotoService
  ) { }

  ngOnDestroy(): void {
    this.ngUnSubscribeSubject.next();
    this.ngUnSubscribeSubject.complete();
  }

  ngOnInit(): void {
    this.postService.postList$
    .pipe(takeUntil(this.ngUnSubscribeSubject))
    .subscribe(postList => {
      this.numOfPosts = postList.length;
      if (this.isPostsActive) this.calculatePageNumber();
    });

    this.albumService.albumList$
    .pipe(takeUntil(this.ngUnSubscribeSubject))
    .subscribe(albumList => {
      this.numOfAlbums = albumList.length;
      if (this.isAlbumsActive) this.calculatePageNumber();
    });
  }

  onAlbumClick() {
    this.isPostsActive = false;
    this.isAlbumsActive = true;

    // change the page number to reflect album
    this.calculatePageNumber()

    // Reset the firstAndLastItem tracker and page Index
    this.firstAndLastItem = [0, this.maxNumOfAlbums]
    this.resetPageIndex()
  }

  onPostsClick() {
    this.isPostsActive = true;
    this.isAlbumsActive = false;

    // change the page number to reflect posts
    this.calculatePageNumber()

    // Reset the firstAndLastItem tracker and page Index
    this.firstAndLastItem = [0, this.maxNumOfPosts]
    this.resetPageIndex()
  }

  onClickPrevious() {
    if (this.isPostsActive) {
      this.firstAndLastItem = this.firstAndLastItem.map(item => item - this.maxNumOfPosts);
    }

    if (this.isAlbumsActive) {
      this.firstAndLastItem = this.firstAndLastItem.map(item => item - this.maxNumOfAlbums);
    }

    this.pageIndex--;
  }

  onClickNext() {
    if (this.isPostsActive) {
      this.firstAndLastItem = this.firstAndLastItem.map(item => item + this.maxNumOfPosts);
    }

    if (this.isAlbumsActive) {
      this.firstAndLastItem = this.firstAndLastItem.map(item => item + this.maxNumOfAlbums);
    }

    this.pageIndex++;
  }

  /**
   * Function will trigger internal state side effect (IMPURE FUNCTION)
   */
  private calculatePageNumber() : void {
    if (this.isPostsActive) {
      this.numberOfPagesShouldPaginate = this.returnShouldPaginate(this.maxNumOfPosts, this.numOfPosts);
    }

    if (this.isAlbumsActive) {
      this.numberOfPagesShouldPaginate = this.returnShouldPaginate(this.maxNumOfAlbums, this.numOfAlbums);
    }
  }

  private returnShouldPaginate(numberOfItemsPerPage: number, numberOfItems?: number) {
    const overflow = (numberOfItems ?? 0) % numberOfItemsPerPage;
    let pages = Math.floor((numberOfItems ?? 0)/numberOfItemsPerPage);
    if (overflow === 0) {
      pages -= 1;
    }
    return pages;
  }

  resetPageIndex() {
    this.pageIndex = 0;
    this.firstAndLastItem = [0, this.isPostsActive ? this.maxNumOfPosts : this.maxNumOfAlbums ];
  }
}
