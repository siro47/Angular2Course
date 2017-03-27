import { Injectable } from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import { Router } from '@angular/router';

@Injectable()
export class CustomHttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions, private http: Http, private router: Router) {
    super(backend, options);
  }

  request(url: string | Request, request?: RequestOptionsArgs): Observable<Response> {
    return this.http.request(url, request)
      .catch(error => {
        console.log(error.statusText);
        this.router.navigate(['/login']);
        return Observable.throw(error);
      })
  }

}
