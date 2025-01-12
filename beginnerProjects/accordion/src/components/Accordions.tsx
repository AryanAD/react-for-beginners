import { useState } from "react";

interface AccordionData {
  title: string;
  content: string;
}
const Accordions: React.FC<AccordionData> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    // <div className="bg-orange-50 flex flex-col justify-center items-center min-h-screen min-w-[100vw]">
    <div
      className="w-[30vw] p-5 rounded-sm shadow-sm drop-shadow-sm"
      key={Math.random()}
    >
      <div
        className="flex items-center justify-between p-3 bg-white rounded-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{title}</p>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      <div className="mt-1 bg-white rounded-sm">
        {isOpen && <p className="p-3">{content}</p>}
      </div>
    </div>
    //{/* </div> */}
  );
};

export default Accordions;
