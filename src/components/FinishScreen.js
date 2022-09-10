import styled from "styled-components";
import Button from "./Button";

const FinishContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

export default function FinishScreen(props) {
  return (
    <FinishContainer>
      <h1>Congratulations!</h1>
      <Button text="Back" action={props.setRestart} />
    </FinishContainer>
  );
}
