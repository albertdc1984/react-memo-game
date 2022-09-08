import { useState } from "react";
import "./App.css";
import FinishScreen from "./components/FinishScreen";
import GameScreen from "./components/GameScreen";
import MainScreen from "./components/MainScreen";

function App() {
  const [difficulty, setDifficulty] = useState(0);
  const [gameStatus, setGameStatus] = useState(0);

  const changeDifficulty = () => {
    setDifficulty(difficulty === 2 ? 0 : difficulty + 1);
  };
  const changeGameStatus = (value) => {
    setGameStatus(value);
  };
  return (
    <div className="App">
      {gameStatus === 0 ? (
        <MainScreen
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
          setGame={changeGameStatus}
        />
      ) : (
        <GameScreen setGame={changeGameStatus} />
      )}

      <FinishScreen />
    </div>
  );
}

export default App;
