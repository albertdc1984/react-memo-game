import styled from "styled-components";
import marvel from "../img/12.png";
import marvel2 from "../34927.webp";
import marvel3 from "../marvel3.jpg";
import "./Card.css";

const CardContainer = styled.div`
  position: relative;
  perspective: 1000px;
`;
const CardBorder = styled.div`
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  border-width: 10px;
  height: 300px;
  width: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url(${marvel3});
  backdrop-filter: blur(20px);
  background-position: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
const CardBorderBack = styled.div`
  position: absolute;
  top: 0;
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  border-width: 10px;
  height: 300px;
  width: 200px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${marvel2});
  background-size: cover;
`;
const CardFront = styled.img`
  height: 80%;
  filter: drop-shadow(5px 5px 5px #222);
  transform: rotateY(180deg);
`;
const CardBack = styled.img`
  width: 90%;
`;

export default function Card(props) {
  return (
    <CardContainer
      className={`card ${props.rotate ? "rotate" : ""} flip-card`}
      data-id={props.id}
      data-bind={props.bind}
      onClick={() => props.actionRotate(props.id, props.paired)}
    >
      <div className="flip-card-inner ">
        <CardBorder className={`${props.rotate ? "active" : "inactive"} `}>
          <CardFront src={props.image} alt="Card front" />
        </CardBorder>
        <CardBorderBack className={`${props.rotate ? "inactive" : "active"}`}>
          <CardBack src={marvel} alt="Card back" />
        </CardBorderBack>
      </div>
    </CardContainer>
  );
}
