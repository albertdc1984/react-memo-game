import styled from "styled-components";

const ButtonS = styled.button`
  width: 50px;
  height: 30px;
  background-color: blacK;
  color: white;
`;

export default function Button(props) {
  return <ButtonS>{props.text}</ButtonS>;
}
