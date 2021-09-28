export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    this.website = user.website;
  }
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}