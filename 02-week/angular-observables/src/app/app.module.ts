import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

export class MyClass {
  constructor() {
    console.log('nameless class was constructed');
  }
}

const myProvider: Provider = {
  // useValue: 123,
  // provide: "Test"
  useClass: MyClass,
  provide: MyClass
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
    myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
