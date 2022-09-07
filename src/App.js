import { useState } from "react";
import anarchy from "./android-icon-192x192.png";
import "./App.css";
import Button from "./components/Button";
import FinishScreen from "./components/FinishScreen";
import GameScreen from "./components/GameScreen";
import MainScreen from "./components/MainScreen";

function App() {
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficulty = () => {
    setDifficulty(difficulty === 2 ? 0 : difficulty + 1);
  };
  return (
    <div className="App">
      <img src={anarchy} className="App-logo" alt="logo" />
      <MainScreen difficulty={difficulty} changeDifficulty={changeDifficulty} />
      <GameScreen />
      <FinishScreen />
      <Button text="Hola" action={() => console.log("que tal?")} />
    </div>
  );
}

export default App;
