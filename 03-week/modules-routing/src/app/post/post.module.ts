import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { Test } from '../test';


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    Test
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
