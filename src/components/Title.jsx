import "./Title.css";
import Tooltip from "./Tooltip";

export default function Title() {
  return (
    <header className="title">
      <Tooltip />
      <h1 className="title__main">Pomodoro</h1>
      <h4 className="title__secondary">Make the best out of your time!</h4>
    </header>
  );
}
