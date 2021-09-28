import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card-tile',
  templateUrl: './post-card-tile.component.html',
  styleUrls: ['./post-card-tile.component.css']
})
export class PostCardTileComponent implements OnInit {

  @Input() title: string = "Title";
  @Input() description: string = "My long ass description right here";
  @Input() comments: string[] = [
    'Comment 1',
    'Comment 2',
    'Comment 3'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
