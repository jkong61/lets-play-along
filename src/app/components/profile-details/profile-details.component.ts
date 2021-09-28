import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  isPostsActive: boolean = true;
  isAlbumsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAlbumClick() {
    this.isPostsActive = false;
    this.isAlbumsActive = true;
  }

  onPostsClick() {
    this.isPostsActive = true;
    this.isAlbumsActive = false;
  }
}
