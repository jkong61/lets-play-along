import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userListing: User[] = [];
  activeUserId?: number;

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getUserListFromServer()
    .subscribe(value => this.userListing = value)
  }

  onClick($event : any, user: User)
  {
    this.activeUserId = user.id;

    // signal to the Profile and Album Serive to clear data
  }
}
