import { Component, OnInit } from '@angular/core';

// about component - contains self intro info
@Component({
  selector: 'comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  intro = 'I am kalpriksh, a full-stack developer in progress, deep learning enthusiast, a lover of good music and a video game addict !'
  constructor() { }

  ngOnInit(): void {
  }

}
