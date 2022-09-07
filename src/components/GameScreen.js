import Button from "./Button";

export default function GameScreen(props) {
  return (
    <div>
      <Button text="Exit" action={() => console.log("click")} />
    </div>
  );
}
