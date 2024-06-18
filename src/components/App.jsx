import "./App.css";
import Title from "./Title";
import StatusBar from "./StatusBar";
import Settings from "./Settings";
import CycleStatus from "./CycleStatus";
import Time from "./Time";
import TimeControls from "./TimeControls";
import { useState } from "react";

function App() {
  const [runningStatus, setRunningStatus] = useState("settled"); //settled, running, paused
  const [phase, setPhase] = useState("pomodoro"); //pomodoro, shortBreak, longBreak

  return (
    <main id="main">
      <Title />
      <StatusBar phase={phase} />
      <Settings />
      <CycleStatus />
      <Time />
      <TimeControls runningStatus={runningStatus} setRunningStatus={setRunningStatus} />
    </main>
  );
}

export default App;
