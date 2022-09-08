import Button from "./Button";
import sound from "../ding-3.wav";
import Card from "./Card";

export default function GameScreen(props) {
  const audio = new Audio(sound);
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
      <div>
        <p>cards</p>
        <Card></Card>
      </div>
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
