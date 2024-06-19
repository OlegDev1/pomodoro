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
  const [phases, setPhases] = useState([
    //pomodoro, shortBreak, longBreak
    { phase: "pomodoro", time: 3, current: true },
    { phase: "shortBreak", time: 5, current: false },
    { phase: "pomodoro", time: 3, current: false },
    { phase: "longBreak", time: 7, current: false },
  ]);
  const currentPhase = phases.find((item) => item.current);

  return (
    <main id="main" className={currentPhase.phase}>
      <Title />
      <StatusBar phase={currentPhase.phase} />
      <Settings />
      <CycleStatus phases={phases} />
      <Time
        runningStatus={runningStatus}
        setRunningStatus={setRunningStatus}
        phases={phases}
        setPhases={setPhases}
      />
      <TimeControls runningStatus={runningStatus} setRunningStatus={setRunningStatus} />
    </main>
  );
}

export default App;
