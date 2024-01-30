import { React, useState } from "react";
import Counter from "./components/Counter";
import "./style.css";

const App = () => {
  const [step, setStep] = useState(1);

  const handleStepIncrease = () => {
    setStep((s) => s + 1);
  };

  const handleStepDecrease = () => {
    setStep((s) => s - 1);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>{`Step: ${step}`}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <Counter stepVal={step} />
    </div>
  );
};

export default App;
