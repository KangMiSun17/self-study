import { useState } from "react";

function Button() {
  const [count, setCount] = useState<number>(0); //Generics 생략해도 상관없음
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <p>{count}</p>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
}

export default Button;
