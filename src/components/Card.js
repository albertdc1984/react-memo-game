import styled from "styled-components";
import anarchy from "../android-icon-192x192.png";

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
const CardBack = styled.img`
  transform: rotate(45deg);
`;

export default function Card(props) {
  return (
    <div>
      <div>
        <CardBorder>
          <img src={anarchy} alt="Card front" />
        </CardBorder>
        <CardBorder>
          <CardBack src={anarchy} alt="Card back" />
        </CardBorder>
      </div>
    </div>
  );
}
