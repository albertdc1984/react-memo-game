import { useState } from "react";
import "./App.css";
import FinishScreen from "./components/FinishScreen";
import GameScreen from "./components/GameScreen";
import MainScreen from "./components/MainScreen";

function App() {
  const [difficulty, setDifficulty] = useState(0);
  const [gameStatus, setGameStatus] = useState(0);

  const [intervalId, setIntervalId] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);

  const changeDifficulty = () => {
    setDifficulty(difficulty === 2 ? 0 : difficulty + 1);
  };
  const changeGameStatus = (value) => {
    setGameStatus(value);
    if (value === 1) playTimer();
  };

  const cardsByLevel = {
    0: 8,
    1: 16,
    2: 24,
  };

  const playTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
    }
    const newIntervalId = setInterval(() => {
      setMiliseconds((miliseconds) => miliseconds + 1000);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const resetTimer = () => {
    setMiliseconds(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId();
    }
  };

  const restartGame = () => {
    setGameStatus(0);
    setDifficulty(0);
    resetTimer();
  };

  return (
    <div className="App">
      {gameStatus === 0 ? (
        <MainScreen
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
          setGame={changeGameStatus}
        />
      ) : gameStatus === 1 ? (
        <GameScreen
          numbOfCards={cardsByLevel[difficulty]}
          time={miliseconds}
          setRestart={restartGame}
          setFinish={changeGameStatus}
        />
      ) : (
        <FinishScreen setRestart={restartGame} />
      )}
    </div>
  );
}

export default App;
