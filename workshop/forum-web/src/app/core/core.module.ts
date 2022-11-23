import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyModule } from '../my-module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyModule
  ],
  // providers: [
  //  {
  //   provide: 'Test',
  //   useValue: 'best'
  //  }
  // ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
