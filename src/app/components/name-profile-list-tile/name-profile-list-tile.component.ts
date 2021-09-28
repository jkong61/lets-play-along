import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-profile-list-tile',
  templateUrl: './name-profile-list-tile.component.html',
  styleUrls: ['./name-profile-list-tile.component.css']
})
export class NameProfileListTileComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() name: string = '';
  @Input() phoneNumber: string = '';
  @Input() website: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
