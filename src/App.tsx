import { useState } from "react";
import CONNECTIONS from "./constant/connections";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  let [activeConnId, setActiveConnId] = useState<string | null>(null);

  return (
    <div id="app">
      <SidePanel
        connections={CONNECTIONS}
        activeConnId={activeConnId}
        setActiveConnId={setActiveConnId}
      />
      <MainPanel
        activeConnection={CONNECTIONS.find((conn) => conn.id === activeConnId)}
      />
    </div>
  );
};

export default App;
