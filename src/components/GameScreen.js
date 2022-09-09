import Button from "./Button";
import sound from "../ding-3.wav";
import Card from "./Card";
import randomCardsArr from "../logic/crreateRandomCardsArray";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CardsContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

export default function GameScreen(props) {
  const [cardsArr, setCardsArr] = useState([]);
  const audio = new Audio(sound);

  useEffect(() => {
    setCardsArr(randomCardsArr(props.numbOfCards));
  }, [props.numbOfCards]);

  const rotate = (id, fixed) => {
    setCardsArr((prevArr) => {
      prevArr[id].rotate = true;
      prevArr[id].valid = 1;
      return [...prevArr];
    });
  };

  return (
    <div>
      <h1>Have fun!</h1>
      <div>
        <div>
          <p>moves</p>
        </div>
        <div>
          <p>time</p>
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
                actionRotate={rotate}
              />
            );
          })}
      </CardsContainer>
      <Button
        text="Exit"
        action={() => {
          audio.play();
          props.setGame(0);
        }}
      />
    </div>
  );
}
