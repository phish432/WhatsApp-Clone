import { Connection } from "../../constant/connections";
import DEFAULT_MESSAGES, { Message } from "../../constant/defaultMessages";
import { useState, useRef } from "react";
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
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const { activeConnection } = props;

  if (activeConnection === null) {
    return (
      <div className="mainPanel">
        <Fallback>Select a conversation to get started</Fallback>
      </div>
    );
  }

  const scrollToChatEnd = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  return (
    <div className="mainPanel">
      <Header connection={activeConnection} showUserInfo={true} />
      <ChatArea
        ref={chatAreaRef}
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
      />
      <TextComposer
        key={activeConnection.id}
        activeConnection={activeConnection}
        allMessages={allMessages}
        setAllMessages={setAllMessages}
        onSend={scrollToChatEnd}
      />
    </div>
  );
};

export default MainPanel;
