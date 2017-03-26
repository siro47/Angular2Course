import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/toPromise"
import "rxjs/add/operator/map"


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

  constructor(private http: Http) { }

  public getUsers() : Promise<User[]> {
    return this.http.get('http://localhost:3000/users')
      .map(result => result.json())
      .toPromise();
  }

  private nameHas(filter) {
    return function(element) {
      return element.name.indexOf(filter) >= 0;
    }
  }

  public getUsersFiltered(filter) : Promise<User[]> {
    return Promise.resolve(this.users.filter(this.nameHas(filter)));
  }

  public getUser(id: string) : User {
    for (var user of this.users) {
      if (user.id == id) {
        return user;
      }
    }
  }

  public addUser(user: User) {
    this.users.push(user);
  }

  public removeUser(id: string) {
    var index = this.users.findIndex(user => {return user.id == id});
    this.users.splice(index, 1);
  }

}
