import styled from "styled-components";
import Numberselector from "./Numberselector";
import Totalscroe from "./Totalscore";
import RoleDice from "./RoleDice";
import { useState } from "react";
// import { Button, Outlinebutton, Outlinebutton } from "../styled/Button";
import { Button, Outlinebutton } from "../styled/Button";
import Rule from "./Rule";
import Winner from "./Winner";

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selectnumber, setselectednumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error, seterror] = useState();
  const [showrule, setshowrule] = useState(false);
  const [win, setwin] = useState(false);

  const GenerateRandomumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roledice = () => {
    if (!selectnumber) {
      seterror("You Have not selected any number");
      return;
    }

    const randomnumber = GenerateRandomumber(1, 6);
    console.log(randomnumber);
    setCurrentDice((prev) => randomnumber);

    if (selectnumber === randomnumber) {
      setscore((prev) => prev + randomnumber);
      setwin(true);
      setTimeout(() => {
        setscore(0);
        setwin(false);
      }, 5000);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectednumber(undefined);
  };

  const resetscore = () => {
    setscore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <Totalscroe score={score} />
        <Numberselector
          error={error}
          seterror={seterror}
          selectnumber={selectnumber}
          setselectnumber={setselectednumber}
        />
      </div>
      <RoleDice CurrentDice={CurrentDice} roledice={roledice} />
      <div className="btns">
        <Outlinebutton onClick={resetscore}>Reset Score</Outlinebutton>
        <Button onClick={() => setshowrule((prev) => !prev)}>
          {showrule ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showrule && <Rule />}
      {win && <Winner />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.div`
  padding-top: 10px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }
`;
