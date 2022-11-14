import { map, Observable } from 'rxjs';


// Promises can help with the call back hell, because they return a value
function getValue() {
  return new Promise((res) => {
    setTimeout(() => {
      res('Test');
    }, 2000);
  });
}

// without Promise
function getValue2(cb: (...args: any[]) => void) {
  setTimeout(() => {
    cb('Test');
  }, 2000);
}

// cps - continuation passing styles
getValue2(function (value) {
  console.log(value);
});

// syncronious chaining for arrays with one element
[1]
  .map(function (x) {
    return x + 1;
  })
  .map(function (x) {
    return x * x;
  });

// corresponding async promise chain. Because the promise returns one element
Promise.resolve(1)
  .then(function (value) {
    console.log(value);
  })
  .then()
  .then();

// syncronious chaining for arrays with more elements
[1, 2, 3, 4]
  .map(function (x) {
    return x + 1;
  })
  .map(function (x) {
    return x * x;
  });

// asyncronious observables chain
const o = new Observable(observer => {
    observer.next(100);
    observer.next(200);
    observer.next(300);
    observer.next(400);
    observer.complete();
});

o.subscribe(console.log)

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


// interface ClassProvider {
//   provide: any;
//   useClass?: any;
// }

// interface ValueProvider {
//   provide: any;
//   useValue?: any;
// }

// type Provider = ClassProvider | ValueProvider;

// const injector = {
//   collection: new Map(),
//   instances: new Map(),
//   provide(provider: Provider) {
//     this.collection.set(provider.provide, provider);
//   },
//   get(key: any, defaultValue?: any): any {
//     const provider = this.collection.get(key) as Provider;
//     if(!provider) {
//       if (defaultValue) {return defaultValue; }
//       throw new Error('Value not found in injector');
//     }
//     if ((provider as ValueProvider).useValue) {
//       return (provider as ValueProvider).useValue;
//     }

//     if ((provider as ClassProvider).useClass) {
//       let instance = this.instances.get(provider.provide);
//       if (instance) {return instance}
//       instance = new (provider as ClassProvider).useClass(this);
//       this.instances.set(provider.provide, instance);
//       return instance;
//     }
//     // TODO add other cases for useExisting and useFactory
//   }
// };

// type Injector = typeof injector;

// const amount = Symbol('Amount');

// class Wallet {
//   private amount: number;
//   constructor(injector: Injector) {
//     this.amount = injector.get(amount, 0);
//   }
// }
// class Person {
//   wallet: Wallet;
//   constructor(injector: Injector) {
//     this.wallet = injector.get(Wallet);
//   }
// }

// class Employee {
//   wallet: Wallet;
//   constructor(injector: Injector) {
//     this.wallet = injector.get(Wallet);
//   }
// }

// injector.provide({provide: Wallet, useClass: Wallet});
// injector.provide({provide: amount, useValue: 200});

// const w = new Wallet(injector);
// const p = new Person(injector);
// const e = new Employee(injector);

function interval(intervalValue: number = 0) {
    return new Observable<number>(observer => {
      let counter = 0;
      const timerId = setInterval(() => {
        observer.error(new Error('dfsdssf'))
        observer.next(counter++)
        observer.complete()
      }, intervalValue);
  
      return () => {
        clearInterval(timerId);
      };
    });
  }
  
  const stream$ = interval(2000).pipe(
    map( x => x + 1),
    map( x => x + 1)
  );
  
  setTimeout(() => {
    const sub = stream$.subscribe({
      next: (x) => console.log(x),
      error: (err) => console.error(err),
      complete: () => console.log('observable completed')
    });
  
    setTimeout(() => {
      sub.unsubscribe();
    }, 1000)
  
  }, 3000);
  
  
  
  // const o = new Observable<number>(observer => {
  //   let counter = 0;
  //   setInterval(() => {
  //     observer.next(counter++)
  //   }, 1000)
  //   // observer.next(100);
  //   // observer.next(200);
  //   // observer.next(300);
  //   // observer.next(400);
  //   // observer.complete();
  // });
  
  // o.subscribe(console.log)
  
  // o.pipe(
  //   map( x => x + 1)
  // ).subscribe(console.log);
  