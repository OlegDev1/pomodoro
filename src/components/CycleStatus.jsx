import "./CycleStatus.css";

export default function CycleStatus({ cycleInfo }) {
  return (
    <p className="cycleStatus">
      Pomodoro cycles left:
      <br /> {cycleInfo.currentCycle} of {cycleInfo.totalCycles}
    </p>
  );
}
