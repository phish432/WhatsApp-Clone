import type { User } from "./types/types";

import { DEFAULT_MESSAGES } from "./constant";

import { useState } from "react";

import useMessageDB from "./hooks/useMessageDB";

import MainPanel from "./components/MainPanel/MainPanel";
import SidePanel from "./components/SidePanel/SidePanel";

import "./App.css";

const App = () => {
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [isSpacious, setIsSpacious] = useState<boolean>(true);
  const [messages, messagesDispatch] = useMessageDB("msgDB", DEFAULT_MESSAGES);

  return (
    <div id="app">
      <SidePanel
        activeUser={activeUser}
        isSpacious={isSpacious}
        messages={messages}
        messagesDispatch={messagesDispatch}
        setActiveUser={setActiveUser}
        setIsSpacious={setIsSpacious}
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
