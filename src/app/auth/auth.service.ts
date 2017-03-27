import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  BASE_URL = 'http://localhost:3000';
  LOGIN_URL = '/login';

  constructor(private http: Http) { }

  public login(data) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.BASE_URL + this.LOGIN_URL, data, options)
      .map(result => result.json())
      .catch(function (err) {
        console.log(err);
        return Observable.throw(err);
      })
      .toPromise()
  }

}
