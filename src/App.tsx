import { useState } from "react";
import CONNECTIONS, { Connection } from "./constant/connections";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  const [activeConnect, setActiveConnect] = useState<Connection | null>(null);

  return (
    <div id="app">
      <SidePanel
        activeConnection={activeConnect}
        setActiveConnection={setActiveConnect}
        allConnections={CONNECTIONS}
      />
      <MainPanel activeConnection={activeConnect || null} />
    </div>
  );
};

export default App;
