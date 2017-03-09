import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css'],
  inputs: ['data']
})
export class CustomCardComponent implements OnInit {
  public data;

  @Output()
  removeClicked = new EventEmitter();

  @Output()
  imgClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private removeCard() {
    this.removeClicked.emit(this.data);
  };

  private imageClicked() {
    this.imgClicked.emit(this.data);
  };
}
