import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService, User} from "../users.service";
import {simpsonNameValidator} from "../../shared/simpson-name.directive";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private router: Router,
              private usersService: UsersService,
              private fb: FormBuilder) {

      this.myForm = fb.group({
        name: fb.group({
          firstName: ['', [<any>Validators.required]],
          lastName: ['', [<any>Validators.required]],
        }, { validator: simpsonNameValidator }),
        desc: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
      });
  }

  ngOnInit() {
  }

  save(value, isValid) {
    if (isValid) {
      var newUser = new User ( new Date().getTime().toString(), value.name.firstName + ' ' + value.name.lastName, value.desc, '');
      this.usersService.addUser(newUser)
      this.router.navigate(['/users']);
    } else {
      console.log("Not valid!!!");
    }
  }

}
