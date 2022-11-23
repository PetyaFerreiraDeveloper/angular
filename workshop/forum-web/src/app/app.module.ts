import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { MyModule } from './my-module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    AuthModule,
    ThemeModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MyModule.withProviders()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


