import { InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
// import { UserService } from './user.service';
// import { TestComponent } from './test/test.component';

export class MyClass {
  constructor() {
    console.log('nameless class was constructed');
  }
}

export const myCustomToken = new InjectionToken('Test'); // we use this construction to create a unique value

// another way to create a unique value is with Symbol from JS

Symbol('abc') === Symbol('abc'); // these two are different

const myProvider: Provider = {
  // useValue: 123,
  // provide: "Test"
  provide: myCustomToken,
  useClass: MyClass,
  // provide: MyClass
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MyClass, // -> { useClass: MyClass, provide: MyClass }
    myProvider,
    // UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
