import "./App.css";
import Title from "./Title";
import StatusBar from "./StatusBar";
import Settings from "./Settings";
import CycleStatus from "./CycleStatus";
import Time from "./Time";
import TimeControls from "./TimeControls";

function App() {
  return (
    <main id="main">
      <Title />
      <StatusBar />
      <Settings />
      <CycleStatus />
      <Time />
      <TimeControls />
    </main>
  );
}

export default App;
