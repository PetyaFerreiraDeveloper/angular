import { Component, Inject } from '@angular/core';
import { MyValueInjectionToken } from 'src/providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';
  myIfValue = true;
  // constructor(@Inject(MyValueInjectionToken) myValue: string) {
  //   console.log(myValue);
    
  // }
}
