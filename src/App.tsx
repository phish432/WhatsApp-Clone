import type { User } from "./types/types";

import { useState } from "react";

import useMessageDB from "./hooks/useMessageDB";

import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";

import "./App.css";

const App = () => {
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [isSpacious, setIsSpacious] = useState<boolean>(true);
  const [messages, messagesDispatch] = useMessageDB("msgDB", []);

  return (
    <div id="app">
      <SidePanel
        activeUser={activeUser}
        setActiveUser={setActiveUser}
        isSpacious={isSpacious}
        setIsSpacious={setIsSpacious}
        messages={messages}
        messagesDispatch={messagesDispatch}
      />
      <MainPanel
        activeUser={activeUser}
        isSpacious={isSpacious}
        messages={messages}
        messagesDispatch={messagesDispatch}
      />
    </div>
  );
};

export default App;
