import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { Test } from '../test';
import { UserResolver } from './user-detail.resolver';
import { AuthGuard } from './user-detail.guard';
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent
      },
      {
        path: 'user/detail/:id',
        resolve: { user: UserResolver},
        canActivate: [AuthGuard],
        component: UserDetailComponent
      },
    ])
  ],
  providers: [
    Test // { provide: Test, useClass: Test }
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }
