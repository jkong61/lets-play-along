import { Component, Input, OnInit } from '@angular/core';
import { Ablum } from 'src/app/models/album';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-albums-card-tile',
  templateUrl: './albums-card-tile.component.html',
  styleUrls: ['./albums-card-tile.component.css']
})
export class AlbumsCardTileComponent implements OnInit {

  @Input() album?: Ablum;
  photos: Photo[] = [];

  constructor(private albumService: PhotoService) { }

  ngOnInit(): void {
    if(this.album) {
      this.albumService.getAlbumPhotos(this.album)
      .subscribe(photos => this.photos = photos);
    }
  }
}
