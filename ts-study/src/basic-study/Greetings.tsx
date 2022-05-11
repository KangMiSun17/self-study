import React from "react";

type GreetingsProps = {
  name: string;
};

function Greetings({ name }: GreetingsProps) {
  return <div>Hello, {name}</div>;
}

export default Greetings;
