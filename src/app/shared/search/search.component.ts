import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/timer";
import "rxjs/add/operator/debounce"
import "rxjs/add/operator/merge"

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  filterChanged = new EventEmitter();

  public searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = fb.group({
      search: ['']
    })
  }

  ngOnInit() {
    this.searchForm.valueChanges
      .debounce(() => Observable.timer(1000))
      .subscribe( filter => {
        this.filterChanged.emit(filter.search);
      })
  }

}
