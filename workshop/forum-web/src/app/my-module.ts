import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { RouterModule, RouterState, Routes } from '@angular/router';

//   ('Test': class --> instance )             ('Test': class, instance)
// AppModule (Inj) <--> UserModule (Inj) <--> OtherModule(Inj) <-->...<--> Cmp1  (@Inject('Test'))
//                        |
//                       ----> Cmp 2 (@Inject('Test'))

@Component({
  selector: 'app-test',
  template: `<div>Hello</div>`,
})
export class TestCmp {
  constructor(@Inject('Test') value: string) {
    console.log(value);
  }
}

@NgModule({
  declarations: [TestCmp],
  imports: [CommonModule],
  exports: [TestCmp],
})
export class MyModule {
  static withProviders(): ModuleWithProviders<MyModule> {
    return {
      ngModule: MyModule,
      providers: [
        {
          provide: 'Test',
          useValue: {},
        },
      ],
    };
  }

  static forRoot(routes: Routes): ModuleWithProviders<RouterModule> {
    return {
      ngModule: RouterModule,
      providers: [
        {
          provide: 'MAIN_ROUTES',
          useValue: routes
        }
      ]
    }
  }

  static forChildren(routes: Routes): ModuleWithProviders<RouterModule> {
    return {
      ngModule: RouterModule,
      providers: [
        {
          provide: 'CHILD_ROUTES',
          useValue: routes
        }
      ]
    }
  }

}


