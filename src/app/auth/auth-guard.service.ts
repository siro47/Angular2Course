import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  canActivate() {
    this.router.navigate(['/login']);
    return false;
  }

  constructor( private router: Router) {

  }

}
