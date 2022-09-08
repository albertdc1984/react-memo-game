import Button from "./Button";
import sound from "../ding-3.wav";

export default function GameScreen(props) {
  const audio = new Audio(sound);
  return (
    <div>
      <h1>Have fun!</h1>
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
