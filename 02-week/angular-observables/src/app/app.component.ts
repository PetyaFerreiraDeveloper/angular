import { Component, Inject } from '@angular/core';
import { MyClass, myCustomToken } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-observables';
  counter = 0;
  users = [
    {
      name: 'Ivan'
    },
    {
      name: 'Pesho'
    },
  ];


  constructor(
    // @Inject('Test') test: string
    @Inject(myCustomToken) test1: string,
    test: MyClass
  ) {
    console.log(test);
    
    // setInterval(() => {
    //   this.counter++;
    // }, 3000)
  }

  addUserHandler(nameInput: HTMLInputElement): void {
    const { value: name } = nameInput;
    this.users.push({ name });
    // this.users.push({ name: name });
    nameInput.value = '';
  }
}
