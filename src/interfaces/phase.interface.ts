export interface Phase {
  phase: "pomodoro" | "shortBreak" | "longBreak";
  time: number;
  current: boolean;
}
