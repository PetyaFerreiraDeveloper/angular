import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { myCustomToken } from '../app.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [] // if we define providers here, everytime the component gets destroyed they will get destroyed as well
})
export class TestComponent implements OnInit {

  @Input() users!: {name: string}[];

  constructor(private injector: Injector) { 
    const value = this.injector.get(myCustomToken);
    const appComp = this.injector.get(AppComponent);
    console.log(value, appComp);
    
  }

  ngOnInit(): void {
  }

}
