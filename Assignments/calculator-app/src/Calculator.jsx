import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <div className="grid grid-cols-4 gap-2 mb-4">
        <button onClick={add} className="p-2 bg-blue-500 text-white rounded">+</button>
        <button onClick={subtract} className="p-2 bg-green-500 text-white rounded">-</button>
        <button onClick={multiply} className="p-2 bg-purple-500 text-white rounded">×</button>
        <button onClick={divide} className="p-2 bg-red-500 text-white rounded">÷</button>
      </div>

      <div className="p-3 bg-gray-100 rounded text-center">
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
}
