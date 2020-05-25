import { Component, OnInit } from '@angular/core';
// contains skill set info
@Component({
  selector: 'comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  project = {
    title:'R6 custom server selector',
    about:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos expedita nam praesentium, suscipit officiis dolorem quas deleniti eligendi delectus! Ex nulla odit quidem libero deserunt quam quaerat optio aliquid temporibus.',
    techStack:[
      'angular',
      'html5',
      'css'
    ],
    image:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
  }

  skills = [
    {
      'name':'SQL',
      'percentage':0.50
    },
    {
      'name':'dotNet',
      'percentage':0.50
    },
    {
      'name':'Mongo',
      'percentage':0.56
    },
    {
      'name':'Angular',
      'percentage':0.65
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
