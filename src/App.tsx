import { useState } from "react";
import CONNECTIONS, { Connection } from "./constant/connections";
import DEFAULT_MESSAGES, { Message } from "./constant/defaultMessages";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  let [activeConnect, setActiveConnect] = useState<Connection | null>(null);
  let [allMessages, setAllMessages] = useState<Message[]>(DEFAULT_MESSAGES);

  return (
    <div id="app">
      <SidePanel
        activeConnection={activeConnect}
        setActiveConnection={setActiveConnect}
        allConnections={CONNECTIONS}
      />
      <MainPanel
        activeConnection={activeConnect || null}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </div>
  );
};

export default App;
