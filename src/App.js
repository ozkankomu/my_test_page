import CardContainer from "./components/cardContainer/CardContainer";
import Header from "./components/header/Header";
import Buttons from "./components/buttons/Buttons";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, SetCount] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const prevButtonHandle = () => {
    if (count > 1) {
      SetCount(count - 5);
      setShowHint(false);
    } else {
      console.log("bastı");
      setShowHint(true);
    }
  };

  const nextButtonHandle = () => {
    if (count < 15) {
      SetCount(count + 5);
      setShowHint(false);
    } else {
      console.log("bastı");
      setShowHint(true);
    }
  };

  return (
    <div className="main">
      <Header count={count} />
      <CardContainer count={count} />
      <Buttons
        showHint={showHint}
        prevButtonHandle={prevButtonHandle}
        nextButtonHandle={nextButtonHandle}
      />
    </div>
  );
}

export default App;
