import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ablum } from 'src/app/models/album';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-albums-details-content',
  templateUrl: './albums-details-content.component.html',
  styleUrls: ['./albums-details-content.component.css']
})
export class AlbumsDetailsContentComponent implements OnInit, OnDestroy {

  localAlbums: Ablum[] = [];

  private ngUnSubscribeSubject = new Subject();
  constructor(private albumService : PhotoService) { }

  ngOnInit(): void {
    this.albumService.albumList$
    .pipe(takeUntil(this.ngUnSubscribeSubject))
    .subscribe(albums => this.localAlbums = albums);
  }

  ngOnDestroy(): void {
    this.ngUnSubscribeSubject.next();
    this.ngUnSubscribeSubject.complete();
  }
}
