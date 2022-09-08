import Button from "./Button";

export default function GameScreen(props) {
  return (
    <div>
      <h1>Have fun!</h1>
      <Button text="Exit" action={() => console.log("click")} />
    </div>
  );
}
