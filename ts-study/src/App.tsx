import React from "react";
import Counter from "./basic-study/Counter";
import Greetings from "./basic-study/Greetings";
import MyForm from "./basic-study/MyForm";
import ReducerSample from "./basic-study/ReducerSample";

function App() {
  const onClick = (name: string) => {
    alert(`${name} hi!`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <Greetings name="MM" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </div>
  );
}

export default App;
