import anarchy from "./android-icon-192x192.png";
import "./App.css";
import Button from "./components/Button";
import FinishScreen from "./components/FinishScreen";
import GameScreen from "./components/GameScreen";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <div className="App">
      <img src={anarchy} className="App-logo" alt="logo" />
      <MainScreen />
      <GameScreen />
      <FinishScreen />
      <Button text="Hola" action={() => console.log("que tal?")} />
    </div>
  );
}

export default App;
