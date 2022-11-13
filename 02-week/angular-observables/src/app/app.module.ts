import { InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

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
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MyClass, // -> { useClass: MyClass, provide: MyClass }
    myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
