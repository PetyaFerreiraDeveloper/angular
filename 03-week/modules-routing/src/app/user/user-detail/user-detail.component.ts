import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    console.log(this.activatedRoute.snapshot.params); // this is the routers configuration at the moment of creating the component
    this.activatedRoute.params.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
