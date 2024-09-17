import CONNECTIONS from "./constant/connections";
import DEFAULT_MESSAGES from "./constant/defaultMessages";
import type { Connection, Message } from "./types/types";
import { useState } from "react";
import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";

import "./App.css";

const App = () => {
  const [activeConnect, setActiveConnect] = useState<Connection | null>(null);
  const [allMessages, setAllMessages] = useState<Message[]>(DEFAULT_MESSAGES);

  return (
    <div id="app">
      <SidePanel
        activeConnection={activeConnect}
        setActiveConnection={setActiveConnect}
        allConnections={CONNECTIONS}
        allMessages={allMessages}
      />
      <MainPanel
        activeConnection={activeConnect}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </div>
  );
};

export default App;
