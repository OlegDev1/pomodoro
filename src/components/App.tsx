import "./App.css";
import Title from "./Title.tsx";
import StatusBar from "./StatusBar.tsx";
import Settings from "./Settings.tsx";
import CycleStatus from "./CycleStatus.tsx";
import Time from "./Time.tsx";
import TimeControls from "./TimeControls.tsx";
import { useState } from "react";
import { Phase } from "../interfaces/phase.interface.ts";
import { RunningStatus } from "../interfaces/runningStatus.interface.ts";

function App() {
  const [runningStatus, setRunningStatus] = useState<RunningStatus>("settled");
  const [phases, setPhases] = useState<Phase[]>([
    { phase: "pomodoro", time: 1500, current: true },
    { phase: "shortBreak", time: 300, current: false },
    { phase: "pomodoro", time: 1500, current: false },
    { phase: "longBreak", time: 1200, current: false },
  ]);
  const currentPhase = phases.find((item) => item.current);
  const [timeLeft, setTimeLeft] = useState(currentPhase!.time);

  return (
    <main id="main" className={currentPhase!.phase}>
      <Title />
      <StatusBar phase={currentPhase!.phase} />
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
