import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/test';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private t: Test) { 
    (window as any).t1 = t;
    console.log(this.t);
  }

  ngOnInit(): void {
  }

}
