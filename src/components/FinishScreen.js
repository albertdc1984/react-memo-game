import styled from "styled-components";
import Button from "./Button";
import marvello from "../marvel3.jpg";

const FinishContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${marvello});
  background-size: cover;
`;

export default function FinishScreen(props) {
  return (
    <FinishContainer>
      <h1>Congratulations!</h1>
      <Button text="Back" action={props.setRestart} />
    </FinishContainer>
  );
}
