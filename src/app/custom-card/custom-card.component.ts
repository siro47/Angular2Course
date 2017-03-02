import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
  inputs: ['data']
})
export class CustomCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
