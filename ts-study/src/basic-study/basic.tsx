//string 타입 지정
let 이름: string = "MM"; // 이름 = 123 -> 오류 발생

//array 타입 지정
let 과목: string[] = ["TypeScript", "JavaScript", "React"];

//object 타입 지정
let 사람: { name: string; age: number } = { name: "MM", age: 25 };
let 사람2: { name?: string } = {}; // ?는 name 속성은 옵션이라는 뜻이다. (없어도 오류 안남)

//다양한 타입 지정
let 아이디: string | number = 123;

//타입은 변수에 담아서 사용 가능 (보통 대문자로 선언)
type Name = string | number;
let 이름2: Name = 123;

//함수에 타입지정 가능
function 함수(x: number): number {
  return x * 2;
}

//array에 쓸 수 있는 tuple 타입
type Member = [number, boolean]; // 첫번째는 number, 두번째는 boolean
let john: Member = [123, true];

//object에 타입 지정해야 할 속성이 너무 많으면
type Member2 = {
  [key: string]: string; //글자로 된 모든 object 속성의 타입은 string
};
let mike: Member2 = { name: "MM", age: "123" };

//class 타입지정 가능
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function Basic() {
  return <div>아무것도 아닙니다.</div>;
}

export default Basic;
