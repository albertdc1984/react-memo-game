import Button from "./Button";

export default function MainScreen(props) {
  return (
    <div>
      <Button text="Start" action={() => console.log("Starting...")} />
    </div>
  );
}
