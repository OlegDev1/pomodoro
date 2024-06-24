import "./SettingsMenu.css";
import ButtonSettings from "./ui/buttons/ButtonSettings";
import { useState } from "react";
import { Phase } from "../interfaces/phase.interface";

interface SettingsMenuProps {
  phases: Phase[];
  setPhases: React.Dispatch<React.SetStateAction<Phase[]>>;
  setSettingsIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export default function SettingsMenu({
  phases,
  setPhases,
  setSettingsIsOpened,
  setTimeLeft,
}: SettingsMenuProps) {
  const pomodoroTime = Math.floor(
    (phases.find((item) => item.phase == "pomodoro")?.time ?? 1500) / 60 || 1500
  );
  const shortBreakTime = Math.floor(
    (phases.find((item) => item.phase == "shortBreak")?.time ?? 300) / 60
  );
  const longBreakTime = Math.floor(
    (phases.find((item) => item.phase == "longBreak")?.time ?? 1200) / 60
  );
  const longBreakInterval = phases.length / 2;
  const [settingsData, setSettingsData] = useState({
    pomodoroTime,
    shortBreakTime,
    longBreakTime,
    longBreakInterval,
  });

  function handleSave() {
    const newPhases: Phase[] = [];
    for (let i = 0; i < settingsData.longBreakInterval - 1; i++) {
      newPhases.push({
        phase: "pomodoro",
        time: settingsData.pomodoroTime * 60,
        current: i == 0 ? true : false,
      });
      newPhases.push({
        phase: "shortBreak",
        time: settingsData.shortBreakTime * 60,
        current: false,
      });
    }
    newPhases.push({ phase: "pomodoro", time: settingsData.pomodoroTime * 60, current: false });
    newPhases.push({ phase: "longBreak", time: settingsData.longBreakTime * 60, current: false });

    setPhases(newPhases);
    setTimeLeft(newPhases[0].time);
    setSettingsIsOpened(false);
  }

  return (
    <section className="settings__section">
      <div className="settings__main">
        <header className="settings__header">
          <div className="settings__mainHeader">
            <h2 className="settings__mainTitle">Pomodoro Settings</h2>
            <ButtonSettings type="close" onClick={() => setSettingsIsOpened(false)}>
              X
            </ButtonSettings>
          </div>
          <div className="settings__divider header"></div>
        </header>

        <div className="settings__timeSelectors">
          <h3 className="settings__title time">Time (minutes)</h3>
          <ul className="settings__timeInputs">
            <li className="settings__timeInput">
              <h4 className="timeInput__title">Pomodoro</h4>
              <input
                className="timeInput"
                type="number"
                value={settingsData.pomodoroTime}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    pomodoroTime: +e.target.value < 1 ? 1 : +e.target.value,
                  })
                }
              />
            </li>
            <li className="settings__timeInput">
              <h4 className="timeInput__title">Short Break</h4>
              <input
                className="timeInput"
                type="number"
                value={settingsData.shortBreakTime}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    shortBreakTime: +e.target.value < 1 ? 1 : +e.target.value,
                  })
                }
              />
            </li>
            <li className="settings__timeInput">
              <h4 className="timeInput__title">Long Break</h4>
              <input
                className="timeInput"
                type="number"
                value={settingsData.longBreakTime}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    longBreakTime: +e.target.value < 1 ? 1 : +e.target.value,
                  })
                }
              />
            </li>
          </ul>
          <div className="settings__divider"></div>
        </div>

        <div className="settings__intervalSelectors">
          <h3 className="settings__title interval">Long Break (interval)</h3>
          <ul className="settings__timeInputs">
            <li className="settings__timeInput">
              <h4 className="timeInput__title">Long Break</h4>
              <input
                className="timeInput"
                type="number"
                value={settingsData.longBreakInterval}
                onChange={(e) =>
                  setSettingsData({
                    ...settingsData,
                    longBreakInterval: +e.target.value < 2 ? 2 : +e.target.value,
                  })
                }
              />
            </li>
          </ul>
        </div>

        <div className="settings__buttons">
          <ButtonSettings onClick={() => setSettingsIsOpened(false)} type="cancel">
            Cancel
          </ButtonSettings>
          <ButtonSettings onClick={handleSave} type="save">
            Save
          </ButtonSettings>
        </div>
      </div>

      <div className="settings__closeBackground" onClick={() => setSettingsIsOpened(false)}></div>
    </section>
  );
}
