//함수에서 타입 정의
function hello(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

/* 
# 나머지 매개변수
function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

배열 형태로 기입한다.

# 함수 오버로드
interface User {
    name: string;
    age: number;
}

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
    if (typeof age === "number") {
        return {
            namge,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const sam: User = join("Sam", 30);
const jane: string = join("Jane", "30");

매개 변수의 타입이나 개수에 따라 다르게 동작할 경우 함수 오버로드를 사용해야한다.

# this 타입 정의하기
interface User {
  name: string;
}

const Sam: User = { name: "Sam" };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");
*/

export {};
