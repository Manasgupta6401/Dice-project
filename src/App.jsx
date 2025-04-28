import styled from "styled-components";
import Startgame from "./componets/Startgame";
import { useState } from "react";
import Gameplay from "./componets/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Gameplay /> : <Startgame toggle={toggleGamePlay} />}</>
  );
}

export default App;
