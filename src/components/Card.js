import styled from "styled-components";
import marvel from "../img/12.png";

const CardBorder = styled.div`
  border-style: solid;
  border-radius: 10px;
  border-color: black;
  border-width: 15px;
  height: 300px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardFront = styled.img`
  height: 80%;
`;
const CardBack = styled.img`
  width: 90%;
`;

export default function Card(props) {
  return (
    <div>
      <div>
        <CardBorder>
          <CardFront src={props.image} alt="Card front" />
        </CardBorder>
        <CardBorder>
          <CardBack src={marvel} alt="Card back" />
        </CardBorder>
      </div>
    </div>
  );
}
