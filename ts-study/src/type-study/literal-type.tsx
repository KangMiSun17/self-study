//Literal Types
//string, number, boolean이 있음
//값을 정해놓는 것

const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
  name: string;
  job: Job;
}

const user: User = {
  name: "Bob",
  // job: "student" 오류
  job: "developer",
};

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

export {};
