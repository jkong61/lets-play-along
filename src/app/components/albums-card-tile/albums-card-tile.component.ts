import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-card-tile',
  templateUrl: './albums-card-tile.component.html',
  styleUrls: ['./albums-card-tile.component.css']
})
export class AlbumsCardTileComponent implements OnInit {

  @Input() title: string = '';
  @Input() photos: Photo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Photo {
  source: string;
  description: string;
  alternative: string;
  slug: string;
}