// Generic : 무한히 증가하는 유니온 타입을 해결할때 사용

function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number | string>(arr1); //특정 타입으로 강제하고 싶은 경우에만 사용

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize(arr3); //따로 기입해주지않아도 알아서 해줌

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  //혹은 <{ color: string; coupon: boolean }>으로 적어줘도 됨
  name: "s21",
  price: 1000,
  option: { color: "red", coupon: false },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

interface User {
  name: string;
  age: number;
}

interface Car {
  name: boolean;
  color: string;
}

interface Book {
  price: number;
}

const user: User = { name: "a", age: 10 };
const car: Car = { name: true, color: "red" };
const book: Book = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
// showName(car); name의 type이 string이 아니라 오류
// showName(book); name이 없어서 오류

export {};
