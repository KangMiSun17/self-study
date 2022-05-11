"use strict";
//string 타입 지정
let 이름 = "MM"; // 이름 = 123 -> 오류 발생
//array 타입 지정
let 과목 = ["TypeScript", "JavaScript", "React"];
//object 타입 지정
let 사람 = { name: "MM", age: 25 };
let 사람2 = {}; // ?는 name 속성은 옵션이라는 뜻이다. (없어도 오류 안남)
//다양한 타입 지정
let 아이디 = 123;
let 이름2 = 123;
//함수에 타입지정 가능
function 함수(x) {
    return x * 2;
}
let john = [123, true];
let mike = { name: "MM", age: "123" };
//class 타입지정 가능
class User {
    constructor(name) {
        this.name = name;
    }
}
