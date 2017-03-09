import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService, User} from "../users.service";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private router: Router,
              private usersService: UsersService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required]),
      desc: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    });
  }

  save(value, isValid) {
    if (isValid) {
      var newUser = new User ( new Date().getTime().toString(), value.name, value.desc, '');
      this.usersService.addUser(newUser)
      this.router.navigate(['/users']);
    }
  }

}
