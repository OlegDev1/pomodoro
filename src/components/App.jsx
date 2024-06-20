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
    { phase: "pomodoro", time: 1500, current: true }, //time is in seconds
    { phase: "shortBreak", time: 300, current: false },
    { phase: "pomodoro", time: 1500, current: false },
    { phase: "longBreak", time: 1200, current: false },
  ]);
  const currentPhase = phases.find((item) => item.current);
  const [timeLeft, setTimeLeft] = useState(currentPhase.time);

  return (
    <main id="main" className={currentPhase.phase}>
      <Title />
      <StatusBar phase={currentPhase.phase} />
      <Settings phases={phases} setPhases={setPhases} setTimeLeft={setTimeLeft} />
      <CycleStatus phases={phases} />
      <Time
        runningStatus={runningStatus}
        setRunningStatus={setRunningStatus}
        phases={phases}
        setPhases={setPhases}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
      />
      <TimeControls runningStatus={runningStatus} setRunningStatus={setRunningStatus} />
    </main>
  );
}

export default App;
