import Button from "./Button";
import sound from "../ding-3.wav";
import Card from "./Card";
import randomCardsArr from "../logic/crreateRandomCardsArray";
import { useEffect, useState } from "react";
import styled from "styled-components";
import convertTimer from "../logic/convertTimer";
import Title from "./Title";

const GameScreenDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const CardsContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

export default function GameScreen(props) {
  const [cardsArr, setCardsArr] = useState([]);
  const [moves, setMoves] = useState(0);
  const audio = new Audio(sound);

  useEffect(() => {
    setCardsArr(randomCardsArr(props.numbOfCards));
  }, [props.numbOfCards]);

  const rotate = (id, paired) => {
    if (paired === 0) {
      setCardsArr((prevArr) => {
        prevArr[id].rotate = true;
        prevArr[id].valid = 1;
        return [...prevArr];
      });
      setTimeout(() => validateCards(), 800);
    }
  };
  const validateCards = () => {
    const vCards = cardsArr.filter((card) => card.valid === 1);
    const pairedCards = cardsArr.filter((card) => card.paired === 0).length;
    setMoves(moves + 1);
    if (vCards.length === 2) {
      if (vCards[0].bind !== vCards[1].bind) {
        setCardsArr((prevArr) => {
          prevArr[vCards[0].id].rotate = false;
          prevArr[vCards[0].id].valid = 0;
          prevArr[vCards[1].id].rotate = false;
          prevArr[vCards[1].id].valid = 0;
          return [...prevArr];
        });
      } else {
        setCardsArr((prevArr) => {
          prevArr[vCards[0].id].paired = 1;
          prevArr[vCards[0].id].valid = 0;
          prevArr[vCards[1].id].paired = 1;
          prevArr[vCards[1].id].valid = 0;
          return [...prevArr];
        });
      }
    }

    if (pairedCards === 0) {
      props.setFinish(2);
      console.log("all set");
    }
  };

  return (
    <GameScreenDiv>
      <Title />

      <GameContainer>
        <div>
          <div>
            <p>Moves: {Math.trunc(moves / 2)}</p>
          </div>
          <div>
            <p>time: {convertTimer(props.time)}</p>
          </div>
        </div>
        <CardsContainer>
          {cardsArr
            .sort((a, b) => a.id - b.id)
            .map((card) => {
              return (
                <Card
                  key={card.id}
                  id={card.id}
                  rotate={card.rotate}
                  image={card.card}
                  bind={card.bind}
                  paired={card.paired}
                  actionRotate={rotate}
                  cardArr={cardsArr}
                  setFinish={props.setFinish}
                />
              );
            })}
        </CardsContainer>
        <Button
          text="Exit"
          action={() => {
            audio.play();
            props.setRestart(0);
          }}
        />
      </GameContainer>
    </GameScreenDiv>
  );
}
