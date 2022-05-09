import { useEffect, useState } from "react";

function Box({ createBoxStyle }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(createBoxStyle());
  }, [createBoxStyle]);
  return <div style={style}></div>;
}

export default Box;
