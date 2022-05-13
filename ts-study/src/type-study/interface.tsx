//object type
type Score = "A" | "B" | "C" | "F";

//object 타입
interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  [grade: number]: Score;
}

let user: User = {
  name: "MM",
  age: 25,
  birthYear: 1998,
  1: "A",
  2: "B",
  //3: "c", A, B, C, F 중에 하나가 아니라 오류가 난다.
};

user.age = 10;
user.gender = "male";
// user.birthYear = 1990; readonly이기 때문에 오류가 난다.

//함수 타입
interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

interface IsAdult {
  (age: number): boolean;
}

const a: IsAdult = (age) => {
  return age > 19;
};

a(33); //true

//클래스 타입
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  //Car 속성값을 상속 받을 수 있다.
  door: number;
  stop(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  //여러 개를 extends 할 수 있다.
  price: number;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}

const b = new Bmw("green");
console.log(b); //Bmw: {"wheels": 4, "color": "green"}
b.start(); //"go..."

export {};
