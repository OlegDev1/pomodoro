import { useEffect } from "react";
import "./Time.css";
import _ from "lodash";
import { Phase } from "../interfaces/phase.interface";
import { RunningStatus } from "../interfaces/runningStatus.interface";

interface TypeProps {
  runningStatus: RunningStatus;
  setRunningStatus: React.Dispatch<React.SetStateAction<RunningStatus>>;
  setPhases: React.Dispatch<React.SetStateAction<Phase[]>>;
  phases: Phase[];
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export default function Time({
  runningStatus,
  setRunningStatus,
  setPhases,
  phases,
  timeLeft,
  setTimeLeft,
}: TypeProps) {
  useEffect(() => {
    if (runningStatus != "running") return;

    const intervalId = setInterval(() => setTimeLeft((time) => time - 1), 1000);
    return () => clearInterval(intervalId);
  }, [runningStatus, setTimeLeft]);

  useEffect(() => {
    if (timeLeft == 0) {
      const newPhases: Phase[] = _.cloneDeep(phases);
      const currentIndex = newPhases.findIndex((item) => item.current);
      newPhases[currentIndex].current = false;
      const newIndex = (currentIndex + 1) % newPhases.length;
      newPhases[newIndex].current = true;
      setPhases(newPhases);
      setRunningStatus("settled");
      setTimeLeft(newPhases[newIndex].time);
    }
  }, [timeLeft, setPhases, setRunningStatus, phases, setTimeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  return (
    <time className="timeDisplay">
      {String(minutes).length == 1 ? "0" + minutes : minutes}:
      {String(seconds).length == 1 ? "0" + seconds : seconds}
    </time>
  );
}
