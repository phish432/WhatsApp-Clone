import { Connection } from "../../constant/connections";
import DEFAULT_MESSAGES, { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import ChatArea from "../ChatArea/ChatArea";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

type Props = {
  activeConnection: Connection | null;
};

const MainPanel = (props: Props) => {
  const [allMessages, setAllMessages] = useState<Message[]>(DEFAULT_MESSAGES);

  const { activeConnection } = props;

  if (activeConnection === null) {
    return (
      <div className="mainPanel">
        <Fallback>Select a conversation to get started</Fallback>
      </div>
    );
  }

  return (
    <div className="mainPanel">
      <Header connection={activeConnection} showUserInfo={true} />
      <ChatArea
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
      <TextComposer
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
    </div>
  );
};

export default MainPanel;
