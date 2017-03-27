import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import "rxjs/add/operator/toPromise"
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import {CustomHttpService} from "../shared/network/custom-http.service";


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

  BASE_URL = 'http://localhost:3000';
  GET_USERS_URL = '/users';
  POST_USER_URL = '/user';

  private users = [
    new User("1", "Bart Simpson", "Always up to no good", "./resources/images/bart-simpson.png"),
    new User("2", "Lisa Simpson", "The best of his class", "./resources/images/lisa-simpson.png"),
    new User("3", "Homer Simpson", "D'oh!", "./resources/images/homer-simpson.png"),
    new User("4", "Marge Simpson", "Great wife", "./resources/images/marge-simpson.png"),
    new User("5", "Milhouse", "Nobody likes Milhouse!", "./resources/images/milhouse.jpeg"),
    new User("6", "Ppal. Skinner", "I love my mum", "./resources/images/skinner.png"),
  ]

  constructor(private http: CustomHttpService) { }

  public getUsers() : Promise<User[]> {
    return this.http.get(this.BASE_URL + this.GET_USERS_URL)
      .map(result => result.json())
      .catch(function(err){ console.log(err); return Observable.throw(err); })
      .toPromise()
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
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data = user;
    return this.http.post(this.BASE_URL + this.POST_USER_URL, data, options)
      .map(result => result.json())
      .catch(function(err){ console.log(err); return Observable.throw(err); })
      .toPromise()
  }

  public removeUser(id: string) {
    var index = this.users.findIndex(user => {return user.id == id});
    this.users.splice(index, 1);
  }

}
