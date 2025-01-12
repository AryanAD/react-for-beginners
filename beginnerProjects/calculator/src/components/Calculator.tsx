import { useState } from "react";

const Calculator = () => {
  const [userInput, setUserInput] = useState("");

  const handleClick = (value: string) => {
    setUserInput((prev) => prev + value);
  };

  const handleClear = () => {
    setUserInput("");
  };

  const handleCalculate = () => {
    try {
      setUserInput(eval(userInput).toString());
    } catch (error) {
      setUserInput("Error");
    }
  };

  return (
    <div className="flex flex-col justify-center p-3 border-2 border-teal-100 rounded-lg shadow-md drop-shadow-sm">
      <h1 className="w-full text-4xl font-bold text-center underline text-emerald-500">
        Calculator
      </h1>
      <div className="flex flex-wrap gap-1">
        <input
          type="text"
          value={userInput}
          readOnly
          className="w-full py-10 my-5 text-3xl text-right rounded-lg outline-none bg-slate-50 ring-2 ring-teal-200 focus:ring-emerald-400 text-emerald-500"
        />
        {buttons.map((btn) => (
          <div key={btn} className="w-[24.5%]">
            <button
              onClick={() => handleClick(btn)}
              className={`w-full px-3 py-6 text-xl font-bold transition-all duration-200 rounded-sm ${
                ["*", "+", "-", "/"].includes(btn)
                  ? "text-yellow-600 bg-yellow-100 hover:bg-yellow-200"
                  : "text-teal-600 bg-teal-100 hover:bg-teal-200"
              }`}
            >
              {btn}
            </button>
          </div>
        ))}
        <div className="w-[24.5%]">
          <button
            onClick={handleClear}
            className="w-full px-3 py-6 text-xl font-bold text-yellow-600 transition-all duration-200 bg-yellow-100 rounded-sm hover:bg-yellow-200"
          >
            AC
          </button>
        </div>
        <div className="w-[24.5%]">
          <button
            onClick={handleCalculate}
            className="w-full px-3 py-6 text-xl font-bold text-red-600 transition-all duration-200 bg-red-100 rounded-sm hover:bg-red-200"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "+",
  "0",
];
export default Calculator;
