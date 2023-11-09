import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const previous = () => {
    step > 1 ? setStep((step) => step - 1) : setStep((step) => step);
  };
  const forward = () => {
    step < 3 ? setStep((step) => step + 1) : setStep((step) => step);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step == 1 ? "active" : ""}>1</div>
        <div className={step == 2 ? "active" : ""}>2</div>
        <div className={`${step == 3 ? "active" : ""}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={previous}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "white" }}
          onClick={forward}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
