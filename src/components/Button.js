import styled from "styled-components";

const ButtonS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  width: 150px;
  height: 30px;
  background-color: blacK;
  color: white;
  border-radius: 5px;
  margin: 5px;
`;

export default function Button(props) {
  return <ButtonS onClick={props.action}>{props.text}</ButtonS>;
}
