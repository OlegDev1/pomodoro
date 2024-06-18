import "./StatusBar.css";

export default function StatusBar({ phase }) {
  return (
    <ul className="statusBar">
      <li className={`statusBar__status 1 ${phase == "pomodoro" && "selected"}`}>Pomodoro</li>
      <li className={`statusBar__status 2 ${phase == "shortBreak" && "selected"}`}>Short Break</li>
      <li className={`statusBar__status 3 ${phase == "longBreak" && "selected"}`}>Long Break</li>
    </ul>
  );
}
