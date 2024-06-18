import "./StatusBar.css";

export default function StatusBar() {
  return (
    <ul className="statusBar">
      <li className="statusBar__status 1">Pomodoro</li>
      <li className="statusBar__status 2">Short Break</li>
      <li className="statusBar__status 3">Long Break</li>
    </ul>
  );
}
