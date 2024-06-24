import "./CycleStatus.css";
import { Phase } from "../interfaces/phase.interface";

export default function CycleStatus({ phases }: { phases: Phase[] }) {
  const totalCycles = phases.length / 2;
  const currentCycleIndex = phases.findIndex((item) => item.current) + 1;
  const currentCycle = Math.round(currentCycleIndex / 2);

  return (
    <p className="cycleStatus">
      Pomodoro cycles left:
      <br /> {currentCycle} of {totalCycles}
    </p>
  );
}
