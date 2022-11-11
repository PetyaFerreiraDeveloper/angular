import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// MONKEY PATCHING

// zone.js is an execution context that persist across async tasks which allows the creator of the zone to observe and controll execution of the code within the zone
// zone.js from polyfills follows all asynchronious browser apis and tells angular when such an opperation has happened and angular triggers the so called Change Detection
// Change detection start from the top of our angular tree (the app component) and goes down the tree and checks if there are any changes. when it encounters a change it rerenders the changed component

//--------------**************------------------------------
// const _setInterval = window.setInterval;
// (window as any).setInterval = function (...args: any[]): number {
//   console.log('setInterval was colled', args);
//   return _setInterval.apply(this, args as any) as unknown as number;
// };
//--------------**************------------------------------

