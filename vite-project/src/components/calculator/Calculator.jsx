import { useState } from "react";
import "./calculator.css";

export default function calculator() {
  const [display, setDisplay] = useState("");
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculateResult = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const cleanDisplay = () => {
    setDisplay("");
  };

  return (
    <div className="Calculator">
      <div className="display">{display}</div>
      <div className="button">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={cleanDisplay}>C</button>
      </div>
    </div>
  );
}
