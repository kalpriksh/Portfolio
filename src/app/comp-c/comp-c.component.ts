import { Component, OnInit, Input } from '@angular/core';

// contains data regarding projects
@Component({
  selector: 'comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {

  @Input('title') title: string;
  @Input('body') about: string;
  @Input('url') image: string;
  @Input('techStack') techStack: any[];
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
