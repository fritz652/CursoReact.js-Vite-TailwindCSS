import { useState } from "react";
import "./estile.css";

function ButtonClickTemplate() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <button className="buttonNota" onClick={handleClick}>
      Hiciste {count} veces click
    </button>
  );
}

export default ButtonClickTemplate;
