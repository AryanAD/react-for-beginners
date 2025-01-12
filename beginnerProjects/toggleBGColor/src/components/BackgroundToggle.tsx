import { useState } from "react";

const BackgroundToggle = () => {
  const [color, setColor] = useState<string>("#000000");

  const generateRandomColor = () => {
    const randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setColor(randomColor);
  };

  return (
    <div
      className="min-w-[100vw] min-h-screen overflow-hidden flex items-center justify-center transition-all duration-500"
      style={{ backgroundColor: color }}
    >
      <button
        className="px-4 py-3 text-white bg-black rounded-full shadow-md drop-shadow-lg"
        onClick={generateRandomColor}
      >
        Click Me
      </button>
    </div>
  );
};

export default BackgroundToggle;
