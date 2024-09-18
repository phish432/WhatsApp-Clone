import CONNECTIONS from "./constant/connections";
import DEFAULT_MESSAGES from "./constant/defaultMessages";
import type { Connection, Message } from "./types/types";
import { useState } from "react";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import "./App.css";

const App = () => {
  const [allConnections, setAllConnections] = useState<Connection[]>(CONNECTIONS);
  const [allMessages, setAllMessages] = useState<Message[]>(DEFAULT_MESSAGES);
  const [activeConnection, setActiveConnection] = useState<Connection | null>(null);

  return (
    <div id="app">
      <SidePanel
        allMessages={allMessages}
        allConnections={allConnections}
        activeConnection={activeConnection}
        setAllMessages={setAllMessages}
        setAllConnections={setAllConnections}
        setActiveConnection={setActiveConnection}
      />
      <MainPanel
        allMessages={allMessages}
        activeConnection={activeConnection}
        setAllMessages={setAllMessages}
      />
    </div>
  );
};

export default App;
