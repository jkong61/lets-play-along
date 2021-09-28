import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { PhotoService } from 'src/app/services/photo.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  userListing: User[] = [];
  activeUser?: User;

  private ngUnSubscribeSubject = new Subject();

  constructor(
    private userService : UserService,
    private postService : PostService,
    private albumService : PhotoService
  ) {}

  ngOnDestroy(): void {
    this.ngUnSubscribeSubject.next();
    this.ngUnSubscribeSubject.complete();
  }

  ngOnInit(): void {
    this.userService.getUserListFromServer()
    .pipe(takeUntil(this.ngUnSubscribeSubject))
    .subscribe(value => this.userListing = value);

    this.userService.currentActiveUser$
    .pipe(takeUntil(this.ngUnSubscribeSubject))
    .subscribe(user => this.activeUser = user);
  }

  onClick(user: User)
  {
    this.userService.setCurrentActiveUser(user);

    this.postService.getPosts()?.subscribe(
      () => {},
      error => console.log(error)
    );

    this.albumService.getAlbum()?.subscribe(
      () => {},
      error => console.log(error)
    );
  }
}
