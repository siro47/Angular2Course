import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, UsersService } from './users.service';

@Component({
  selector: 'app-users-section',
  templateUrl: './users-section.component.html',
  styleUrls: ['./users-section.component.css']
})
export class UsersSectionComponent implements OnInit {

  private section_title = 'USERS';

  private users: User[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) { }

  ngOnInit () {
    this.usersService.getUsers().then(users => this.users = users)
  }

  public addNewUser() {
    this.usersService.addUser(new User("7", "Moe", "Prettiest bartender ever", "./resources/images/moe.png"))
  }

  private removeUser(data) {
    this.usersService.removeUser(data.id);
  }

  private showUserDetails(data) {
    this.router.navigate(['/user', data.id]);
  }
}
