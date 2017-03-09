import { Injectable } from '@angular/core';

export class User {
  id: string;
  name: string;
  desc: string;
  image: string;

  constructor(id: string, name: string, desc:string, image:string) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.image = image;
  }
}

@Injectable()
export class UsersService {

  private users = [
    new User("1", "Bart Simpson", "Always up to no good", "./resources/images/bart-simpson.png"),
    new User("2", "Lisa Simpson", "The best of his class", "./resources/images/lisa-simpson.png"),
    new User("3", "Homer Simpson", "D'oh!", "./resources/images/homer-simpson.png"),
    new User("4", "Marge Simpson", "Great wife", "./resources/images/marge-simpson.png"),
    new User("5", "Milhouse", "Nobody likes Milhouse!", "./resources/images/milhouse.jpeg"),
    new User("6", "Ppal. Skinner", "I love my mum", "./resources/images/skinner.png"),
  ]

  constructor() { }

  public getUsers() :User[] {
    return this.users;
  }

}
