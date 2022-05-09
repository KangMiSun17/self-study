import React, { useEffect, useRef } from "react";

function Ref() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default Ref;
