import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User, UsersService } from "../users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private id: string;
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
      // (+) converts string 'id' to a number
      .subscribe(params => {this.id = params['id']})

    this.route.data
      .subscribe(data => console.log(data))

    this.user = this.usersService.getUser(this.id);
  }
}
