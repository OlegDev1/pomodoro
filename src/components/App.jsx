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
    { phase: "pomodoro", time: 3, currentCycle: 1, totalCycles: 2 },
    { phase: "longBreak", time: 20, currentCycle: 1, totalCycles: 2 },
    { phase: "pomodoro", time: 11, currentCycle: 2, totalCycles: 2 },
    { phase: "shortBreak", time: 9, currentCycle: 2, totalCycles: 2 },
  ]);

  return (
    <main id="main" className={phases[0].phase}>
      <Title />
      <StatusBar phase={phases[0].phase} />
      <Settings />
      <CycleStatus cycleInfo={phases[0]} />
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
