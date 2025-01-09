import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => setCount(count - 1);
  return (
    <div className="bg-teal-50 flex flex-col p-4 shadow-md drop-shadow-lg items-center gap-6 w-60 rounded-lg">
      <p className="text-6xl text-emerald-200">{count}</p>
      <div className="flex flex-row gap-6">
        <button
          onClick={handleDecrement}
          className="w-10 h-10 rounded-full drop-shadow-md shadow-amber-100 bg-lime-300 text-white text-3xl"
        >
          -
        </button>
        <button
          onClick={handleIncrement}
          className="w-10 h-10 rounded-full drop-shadow-md shadow-amber-100 bg-red-300 text-white text-3xl"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
