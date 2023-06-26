import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };


  const handleCalculate = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Calculator</h1>
      <div className="flex items-center">
        <input
          className="w-24 p-2 text-center border rounded-l"
          type="number"
          placeholder="number 1"
          value={number1}
          onChange={handleNumber1Change}
        />
        <span className="text-3xl mx-4">+</span>
        <input
          className="w-24 p-2 text-center border rounded-r"
          type="number"
          value={number2}
          placeholder="number 2"
          onChange={handleNumber2Change}
        />
        <span className="text-3xl mx-4">=</span>
        <span className="text-4xl">{result}</span>
      </div>
      <button
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded"
        onClick={handleCalculate}
      >
        Calculate
      </button>
    </div>
  );
}

export default Calculator;
