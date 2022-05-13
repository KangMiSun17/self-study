//Union Types (or)

interface Car {
  name: "car";
  color: string;
  start(): void;
}
interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

export {};
