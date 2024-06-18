import "./Title.css";
import Button from "./ui/buttons/Button";

export default function Title() {
  return (
    <header className="title">
      <Button
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#D9AAF1"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        }
        type="info"
      />
      <h1 className="title__main">Pomodoro</h1>
      <h4 className="title__secondary">Make the best out of your time!</h4>
    </header>
  );
}
