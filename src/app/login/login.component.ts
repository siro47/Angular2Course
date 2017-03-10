import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public checkForm (form) {
    //TODO - Actual validation against server
    localStorage.setItem('token', 'mytoken');
    this.router.navigate(['/users']);

  }
}
