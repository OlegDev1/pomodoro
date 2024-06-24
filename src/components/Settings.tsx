import { useState } from "react";
import "./Settings.css";
import Button from "./ui/buttons/Button";
import SettingsMenu from "./SettingsMenu";
import { Phase } from "../interfaces/phase.interface";

interface SettingsProps {
  phases: Phase[];
  setPhases: React.Dispatch<React.SetStateAction<Phase[]>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export default function Settings({ phases, setPhases, setTimeLeft }: SettingsProps) {
  const [settingsIsOpened, setSettingsIsOpened] = useState(false);

  return (
    <div className="settings">
      <Button
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="#E4B8FA"
            className="settings__icon">
            <path d="M6.5 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0V4.5h6.75a.75.75 0 0 0 0-1.5H6.5v-.75ZM11 6.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0v-.75h2.25a.75.75 0 0 0 0-1.5H11V6.5ZM5.75 10a.75.75 0 0 1 .75.75v.75h6.75a.75.75 0 0 1 0 1.5H6.5v.75a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM2.75 7.25H8.5v1.5H2.75a.75.75 0 0 1 0-1.5ZM4 3H2.75a.75.75 0 0 0 0 1.5H4V3ZM2.75 11.5H4V13H2.75a.75.75 0 0 1 0-1.5Z" />
          </svg>
        }
        type="settings"
        onClick={() => setSettingsIsOpened(true)}>
        Settings
      </Button>
      {settingsIsOpened && (
        <SettingsMenu
          phases={phases}
          setSettingsIsOpened={setSettingsIsOpened}
          setPhases={setPhases}
          setTimeLeft={setTimeLeft}
        />
      )}
    </div>
  );
}
