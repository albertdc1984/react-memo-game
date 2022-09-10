import styled from "styled-components";
import Button from "./Button";
import sound from "../ding-3.wav";
import marvello from "../marvel3.svg";

const MainScreena = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  width: 100vw;
  height: 100vh;
  background-image: url(${marvello});
  background-size: 250vw;
  animation: background-rotate 200s infinite;
  @keyframes background-rotate {
    0% {
      background-position: top right;
    }
    25% {
      background-position: bottom left;
    }
    50% {
      background-position: bottom-right;
    }
    75% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    position: absolute;
    top: 6vh;
    text-shadow: #fff 1px 0 1px;
    border-style: solid;
    border-color: black;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 250px;
  height: 300px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 37px;
    text-shadow: #fff 1px 0 1px;
    margin: 0;
    top: -14px;
    left: -2px;
    width: 300px px;
  }
  button {
    background-color: red;
    box-shadow: #fff 1px 0 1px;
    border-style: none;
  }
`;

export default function MainScreen(props) {
  var audio = new Audio(sound);
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  return (
    <MainScreena>
      <TitleBox>
        <h1>
          MARVEL <span className="title-part">Memory Game</span>
        </h1>
      </TitleBox>
      <ButtonBox>
        <h2 className="title-part">Choose difficulty</h2>
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
            props.setGame(1);
          }}
        />
      </ButtonBox>
    </MainScreena>
  );
}
