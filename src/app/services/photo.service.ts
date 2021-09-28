import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BASE_URL } from '../configs/constants.config';
import { Ablum } from '../models/album';
import { Photo } from '../models/photo';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private albumListSubject = new BehaviorSubject<Ablum[]>([]);
  albumList$ = this.albumListSubject.asObservable();

  private currentActiveUser?: User;

  constructor(    
    private http: HttpClient,
    private userService: UserService,
    @Inject(BASE_URL) private baseUrl: string,
  ) { 
    this.userService.currentActiveUser$
    .subscribe(user => this.currentActiveUser = user);
  }

  getAlbum() {
    if (this.currentActiveUser) {
      const postsUrl = `${this.baseUrl}/user/${this.currentActiveUser.id}/albums/`
      return this.http.get<Ablum[]>(postsUrl)
      .pipe(
        tap(albums => this.albumListSubject.next(albums))
      )
    }
    return undefined;
  }

  getAlbumPhotos(album: Ablum) {
    const photosUrl = `${this.baseUrl}/album/${album.id}/photos/`
    return this.http.get<Photo[]>(photosUrl)
  }
}
