import React from "react";
import styled from "styled-components";

const Rule = () => {
  return (
    <Rulecontainer>
      <h2>How to play game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </Rulecontainer>
  );
};

export default Rule;

const Rulecontainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #fbf1f1;
  padding: 20px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
