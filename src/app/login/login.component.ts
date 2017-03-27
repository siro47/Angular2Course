import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  public checkForm (form) {
    this.authService.login(form.value)
      .then(result => {
        if (result.userToken) {
          localStorage.setItem('token', result.userToken);
          this.router.navigate(['/users']);
        }
      });
  }
}
