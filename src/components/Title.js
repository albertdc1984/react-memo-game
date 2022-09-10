import styled from "styled-components";

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 80px;
    text-shadow: #fff 1px 0 1px;
    border-style: solid;
    border-color: black;
    border-radius: 10px;
    background-color: rgb(255 0 0 / 70%);
    color: white;
    padding: 0 10px;
    z-index: 2;
  }
`;

export default function Title() {
  return (
    <TitleBox>
      <h1>MARVEL MEMORY GAME</h1>
    </TitleBox>
  );
}
