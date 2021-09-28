import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BASE_URL } from '../configs/constants.config';
import { Post } from '../models/post';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsListSubject = new BehaviorSubject<Post[]>([]);
  postList$ = this.postsListSubject.asObservable();

  private currentActiveUser?: User;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    @Inject(BASE_URL) private baseUrl: string,
    ) {
      this.userService.currentActiveUser$
        .subscribe(user => this.currentActiveUser = user);
  }

  getPosts() {
    if (this.currentActiveUser) {
      const postsUrl = `${this.baseUrl}/user/${this.currentActiveUser.id}/posts/`
      return this.http.get<Post[]>(postsUrl)
      .pipe(
        tap(posts => this.postsListSubject.next(posts))
      )
    }
    return undefined;
  }

  getPostComments(post: Post) {
    const commentsUrl = `${this.baseUrl}/post/${post.id}/comments/`
    return this.http.get<Comment[]>(commentsUrl)
  }

  resetPost() {
    this.postsListSubject.next([]);
  }
}
