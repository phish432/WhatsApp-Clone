import { Connection, Message } from "../../types/types";
import { useRef } from "react";
import ChatArea from "../ChatArea/ChatArea";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

type Props = {
  activeConnection: Connection | null;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const MainPanel = (props: Props) => {
  const { activeConnection, allMessages, setAllMessages } = props;

  if (activeConnection === null) {
    return (
      <div className="mainPanel">
        <Fallback>Select a conversation to get started</Fallback>
      </div>
    );
  }

  const chatAreaRef = useRef<HTMLDivElement>(null);

  const scrollToEndOfChatArea = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  return (
    <div className="mainPanel">
      <Header>
        {/* <ConnectionCard
          userName={activeConnection.name}
          profileImg={activeConnection.profileImg}
          onClick={() => {}}
          isActive={false}
          latestMessage={null}
        /> */}
      </Header>
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
        scrollToEndOfChatArea={scrollToEndOfChatArea}
      />
    </div>
  );
};

export default MainPanel;
