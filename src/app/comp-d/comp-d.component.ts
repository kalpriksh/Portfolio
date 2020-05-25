import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css']
})
export class CompDComponent implements OnInit {

  list = [
    {'fa-brain': true},
    {'fa-shipping-fast': true},
    {'fa-laptop-code': true},
    {'fa-magic': true}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
