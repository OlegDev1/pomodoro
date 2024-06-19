import { useEffect, useState } from "react";
import "./Time.css";

export default function Time({ runningStatus, setRunningStatus, setPhases, phases }) {
  const [timeLeft, setTimeLeft] = useState(phases[0].time);

  useEffect(() => {
    if (runningStatus != "running") return;

    const intervalId = setInterval(() => setTimeLeft((time) => time - 1, 1000), 1000);
    return () => clearInterval(intervalId);
  }, [runningStatus]);

  useEffect(() => {
    if (timeLeft == 0) {
      const localPhases = [...phases].slice(1);
      setPhases(localPhases);
      setRunningStatus("settled");
      setTimeLeft(localPhases[0].time);
    }
  }, [timeLeft, setPhases, setRunningStatus, phases]);

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft - minutes * 60;

  return (
    <time className="timeDisplay">
      {String(minutes).length == 1 ? "0" + minutes : minutes}:
      {String(seconds).length == 1 ? "0" + seconds : seconds}
    </time>
  );
}
