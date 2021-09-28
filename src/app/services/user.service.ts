import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL } from '../configs/constants.config';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userListSubject: Subject<User[]> = new BehaviorSubject<User[]>([]);
  userList$ = this.userListSubject.asObservable();

  private currentActiveUserSubject: Subject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  currentActiveUser$ = this.currentActiveUserSubject.asObservable();

  constructor(@Inject(BASE_URL) private baseUrl: string, private http: HttpClient) { }

  getUserListFromServer() {
    const userUrl = `${this.baseUrl}/users`
    return this.http.get<User[]>(userUrl).pipe(
      map(response => {
        const userList = response.map(user => new User({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website
        }));
        this.userListSubject.next(userList);
        return response;
      })
    )
  }

  setCurrentActiveUser(user: User) {
    this.currentActiveUserSubject.next(user);
  }
}
