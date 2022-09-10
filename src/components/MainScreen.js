import styled from "styled-components";
import Button from "./Button";
import sound from "../ding-3.wav";
import marvello from "../marvel3.svg";
import Title from "./Title";

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
  top: 0;
  position: absolute;
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

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 250px;
  height: 225px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);

  h2 {
    font-size: 30px;
    text-shadow: #fff 1px 0 1px;
    margin: 15px 0;
    color: white;
  }
  button {
    background-color: red;
    border-style: none;
    :active {
      background-color: #de0000;
    }
  }
`;

export default function MainScreen(props) {
  var audio = new Audio(sound);
  const difficultyLevels = ["EASY", "MEDIUM", "HARD"];
  return (
    <>
      <Title />
      <MainScreena>
        <ButtonBox>
          <h2 className="title-part">CHOOSE DIFFICULTY</h2>
          <Button
            text={difficultyLevels[props.difficulty]}
            action={() => {
              audio.play();
              props.changeDifficulty();
            }}
          />
          <br />
          <Button
            text="START"
            action={() => {
              audio.play();
              props.setGame(1);
            }}
          />
        </ButtonBox>
      </MainScreena>
    </>
  );
}
