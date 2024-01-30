import React from "react";
import { useState } from "react";

const Counter = ({ stepVal }) => {
  const [counter, setCounter] = useState(0);

  const handleCounterIncrease = () => {
    setCounter((s) => s + stepVal);
  };

  const handleCounterDecrease = () => {
    setCounter((s) => s - stepVal);
  };

  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <div>
      <button onClick={handleCounterDecrease}> - </button>
      <span>Counter : {counter}</span>
      <button onClick={handleCounterIncrease}> + </button>
      <p>
        {counter === 0
          ? `Today is ${date.toDateString()}`
          : counter < 0
          ? `${Math.abs(counter)} days ago from today is ${date.toDateString()}`
          : `${counter} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
};

export default Counter;
