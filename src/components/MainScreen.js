import styled from "styled-components";
import Button from "./Button";

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function MainScreen(props) {
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  return (
    <div>
      <TitleBox>
        <h1>Memo Game</h1>
        <h2>Choose difficulty</h2>
      </TitleBox>
      <ButtonBox>
        <Button
          text={difficultyLevels[props.difficulty]}
          action={props.changeDifficulty}
        />
        <br />
        <Button text="Start" action={() => console.log("Starting...")} />
      </ButtonBox>
    </div>
  );
}
