import { useState } from "react";
import "./App.css";
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

  const cardsByLevel = {
    0: 8,
    1: 16,
    2: 24,
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
        <GameScreen
          setGame={changeGameStatus}
          numbOfCards={cardsByLevel[difficulty]}
        />
      )}
    </div>
  );
}

export default App;
