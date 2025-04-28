// ./Winner.js
import styled from "styled-components";

const Winner = () => {
  return (
    <Overlay>
      <Message>🎉 Congratulations! You Win! 🎉</Message>
    </Overlay>
  );
};

export default Winner;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8); /* semi-transparent black */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Message = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 40px 60px;
  border-radius: 12px;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  animation: pop 0.4s ease;

  @keyframes pop {
    0% {
      transform: scale(0.7);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
