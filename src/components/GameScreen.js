import Button from "./Button";
import sound from "../ding-3.wav";
import Card from "./Card";
import randomCardsArr from "../logic/crreateRandomCardsArray";
import { useEffect, useState } from "react";
import styled from "styled-components";
import convertTimer from "../logic/convertTimer";

const CardsContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
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
  const validateCards = async () => {
    const vCards = cardsArr.filter((card) => card.valid === 1);
    const pairedCards = cardsArr.filter((card) => card.paired === 0).length;
    setMoves(moves + 1);
    if (vCards.length === 2) {
      if (vCards[0].bind !== vCards[1].bind) {
        await setCardsArr((prevArr) => {
          prevArr[vCards[0].id].rotate = false;
          prevArr[vCards[0].id].valid = 0;
          prevArr[vCards[1].id].rotate = false;
          prevArr[vCards[1].id].valid = 0;
          return [...prevArr];
        });
      } else {
        await setCardsArr((prevArr) => {
          prevArr[vCards[0].id].paired = 1;
          prevArr[vCards[0].id].valid = 0;
          prevArr[vCards[1].id].paired = 1;
          prevArr[vCards[1].id].valid = 0;
          return [...prevArr];
        });
      }
    }

    console.log(pairedCards);
    if (pairedCards === 0) {
      debugger;
      await props.setFinish(2);
      console.log("all set");
    }
  };

  return (
    <div>
      <h1>Have fun!</h1>
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
                onclick={() => validateCards()}
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
    </div>
  );
}
