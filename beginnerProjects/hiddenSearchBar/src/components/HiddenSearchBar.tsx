import { useState } from "react";

const HiddenSearchBar = () => {
  const [toggleHide, setToggleHide] = useState(false);
  const bgColor = toggleHide ? "orangered" : "#f9f9f9";
  return (
    <div
      className="min-h-screen min-w-[100vw] overflow-hidden flex items-center justify-center transition-all duration-200"
      style={{ background: bgColor }}
    >
      {toggleHide ? (
        <div className="flex items-center space-x-4">
          <input
            className="px-6 py-4 rounded-full"
            type="text"
            placeholder="Enter your search query..."
          />
          <button
            onClick={() => setToggleHide(false)}
            className="px-6 py-4 text-black bg-white rounded-full shadow-md drop-shadow-lg"
          >
            Click Me
          </button>
        </div>
      ) : (
        <button
          onClick={() => setToggleHide(true)}
          className="px-4 py-2 text-white bg-blue-500 rounded-full shadow-md drop-shadow-lg"
        >
          Click Me
        </button>
      )}
    </div>
  );
};

export default HiddenSearchBar;
