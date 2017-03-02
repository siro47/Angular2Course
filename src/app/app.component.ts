import { Component } from '@angular/core';

class User {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private section_title = 'USERS';

  private users = [
    new User("1", "Bart Simpson", "Always up to no good", "bart-simpson.png"),
    new User("2", "Lisa Simpson", "The best of his class", "lisa-simpson.png"),
    new User("3", "Homer Simpson", "D'oh!", "homer-simpson.png"),
    new User("4", "Marge Simpson", "Great wife", "marge-simpson.png"),
    new User("5", "Milhouse", "Nobody likes Milhouse!", "milhouse.jpeg"),
    new User("6", "Ppal. Skinner", "I love my mum", "skinner.png"),
  ]
}
