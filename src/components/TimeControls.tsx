import "./TimeControls.css";
import Button from "./ui/buttons/Button";
import { RunningStatus } from "../interfaces/runningStatus.interface";

interface TimeControlsProps {
  runningStatus: RunningStatus;
  setRunningStatus: React.Dispatch<React.SetStateAction<RunningStatus>>;
}

export default function TimeControls({ runningStatus, setRunningStatus }: TimeControlsProps) {
  return (
    <div className="timeControls">
      <Button
        type="timerControl"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        }
        onClick={() => setRunningStatus("running")}
        isActive={runningStatus === "running"}
      />
      <Button
        type="timerControl"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        }
        onClick={() => setRunningStatus("paused")}
        isActive={runningStatus === "paused"}
      />
    </div>
  );
}
