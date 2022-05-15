// keyof

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = "id"; // User interface key값을 넣지않으면 오류

// Partial<T>
/*
Partial을 넣으면
interface User {
    id?: number;
    name?: string;
    age?: number;
    gender?: "m" | "f";
}
와 같아진다.
*/
let admin: Partial<User> = {
  id: 1,
  name: "Bob",
};

// Required<T>
// 모든 프로퍼티를 필수로 바꿔준다.

// Readonly<T>
// 첫 할당만 가능하고 수정은 불가하다.

// Record<K,T>

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D" | "F";

const score: Record<Grade, Score> = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};

function isValid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
    gender: user.gender == "m",
  };
}

//Pick<T,K>
//T에서 K값만 가져와서 사용

const owner: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

//Omit<T,K>
//T에서 K값을 제거하고 사용

const owner2: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

//Exclude<T1, T2>
//T1에서 T2를 제외하고 사용
//Omit과 다른 점은 Omit은 프로퍼티로 제거, Exclude는 타입으로 제거

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

//NonNullable<Type>
//null, undefined 제외한 타입

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>;

export {};
