//Intersection Types(교차 타입 And)

interface Car {
  name: string;
  start(): void;
}
interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
};

export {};
