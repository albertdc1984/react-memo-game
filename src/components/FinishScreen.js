import Button from "./Button";

export default function FinishScreen(props) {
  return (
    <div>
      <Button text="Back" action={() => console.log("to the future")} />
    </div>
  );
}
