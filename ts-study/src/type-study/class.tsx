/* 접근 제한자(Access modifier) - public, private, protected
public은 자식 클래스나 클래스 인스턴스에서 접근이 가능하다. (기본값)
private는 자식 클래스 내부에서 사용이 불가능하다.
protected는 자식 클래스에서는 가능하나 클래스 인스턴스에서는 접근이 불가능하다.
*/
class Car {
  readonly name: string = "car";
  color: string;
  static wheels = 4; //static을 붙여주면 정적 매개변수이므로 접근시 클래스명으로 접근
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels);
  }
}

class Bmw extends Car {
  constructor(color: string, name: string) {
    super(color, name); //super 쓰지 않으면 오류
  }
  showName() {
    console.log(this.name); //Car의 name이 #name이나 private name일 경우 오류
  }
}

const z4 = new Bmw("black", "zzz4");
console.log(z4.name); // Car의 name이 protected일 경우 오류
// z4.name = "zzz4"; Card의 name이 public일 경우만 접근 가능
console.log(Car.wheels);

// 추상 class
// 상속받는 쪽에서 구체적으로 구현하는 class를 말한다.
abstract class Toy {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract doSomething(): void;
}

// const toy = new Toy("red"); 추상 class는 상속을 통해서만 사용가능

class Doll extends Toy {
  constructor(color: string) {
    super(color);
  }
  doSomething(): void {
    alert(3);
  }
}

const bear = new Doll("brown");

export {};
