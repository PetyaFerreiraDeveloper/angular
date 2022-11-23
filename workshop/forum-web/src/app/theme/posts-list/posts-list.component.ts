import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  postList: IPost[] | null = null;
  errorFetchingData = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.postList = value;
        console.log(value);
        
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      }
    });
  }

}
