import styled from "styled-components";
import Button from "./Button";
import sound from "../ding-3.wav";

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
  var audio = new Audio(sound);
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
          action={() => {
            audio.play();
            props.changeDifficulty();
          }}
        />
        <br />
        <Button
          text="Start"
          action={() => {
            audio.play();
            props.setGame();
          }}
        />
      </ButtonBox>
    </div>
  );
}
