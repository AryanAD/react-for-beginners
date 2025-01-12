import Accordions from "./components/Accordions";
import { accordionData } from "./constants/constants";

const App = () => {
  return accordionData.map(({ title, content }) => (
    <Accordions title={title} content={content} />
  ));
};

export default App;
