// let username: string = 'Ivo';

// username = 'Maria';

// let boolArray: boolean[] = [true, false];
// console.log(username);

let isOpen: boolean = false;
// let isOpenArray: Array<boolean> = [false, true];

let isOpenArray: boolean[] = [false, true]; // prefered way

function createUser(username: string, age = 0) {
  return {
    username,
    age,
  };
}

const ivan = createUser("Ivan", 100);

function id<T>(item: T): T {
  return item;
}

const num = id(1); // type of num is 1, because num is initialized as a const and can not change later on
let num1 = id(1); // type of num1 is number, because we initialize it with let,

interface IMyDto {
    prop: string;
    prop1: number;
}

let str = id<IMyDto>({ prop: "1", prop1: 1 });

// class MyClass implements IMyDto {
//     prop: string;
//     prop1: number;
// }

class MyNewClass {
    constructor(public name: string, private age: number) {} // when we use public the properties are automatically attached on the this
}

// this will look like that in JS

// class MyNewClassJS {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

const maria = new MyNewClass('Maria', 20);
// (maria as any).age = 1000;

enum UserRole {
  Admin = 'dada',
  User = 'dadsa'
}