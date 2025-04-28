import styled from "styled-components";

const RoleDice = ({ CurrentDice, roledice }) => {
  return (
    <DiceContainer>
      <div className="dices" onClick={roledice}>
        <img src={`image/dice/dice_${CurrentDice}.png`} alt="Dice Image" />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  .dices {
    cursor: pointer;
  }
`;
