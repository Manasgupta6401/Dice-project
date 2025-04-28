import styled from "styled-components";

const Numberselector = ({ error, seterror, selectnumber, setselectnumber }) => {
  const arrnumber = [1, 2, 3, 4, 5, 6];

  const numberselectorhandle = (value) => {
    setselectnumber(value);
    seterror("");
  };

  return (
    <NumberselectoreContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrnumber.map((value, i) => (
          <Box
            isselected={value === selectnumber}
            key={i}
            onClick={() => numberselectorhandle(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <SelecteReset>
        <p>Selceted Number : {selectnumber ?? "None"}</p>

        <ResetButton onClick={() => setselectnumber(undefined)}>
          Reset
        </ResetButton>
      </SelecteReset>
    </NumberselectoreContainer>
  );
};

export default Numberselector;

const NumberselectoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;

const ResetButton = styled.button`
  height: 40px;
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  font-size: 16px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const SelecteReset = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
