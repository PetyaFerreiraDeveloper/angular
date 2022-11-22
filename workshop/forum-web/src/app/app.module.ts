import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MyModule } from './my-module';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    PostsListComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MyModule.withProviders()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


