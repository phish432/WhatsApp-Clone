import { useRef } from "react";
import { useActiveUserContext } from "../../contexts/activeUserContext";
import Avatar from "../Avatar/Avatar";
import ChatArea from "../ChatArea/ChatArea";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import TextComposer from "../TextComposer/TextComposer";
import "./MainPanel.css";

const MainPanel = () => {
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const { activeUser } = useActiveUserContext();

  const scrollToEndOfChatArea = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  if (activeUser === null) {
    return (
      <div className="mainPanel">
        <Fallback>Select a conversation to get started</Fallback>
      </div>
    );
  }

  return (
    <div className="mainPanel">
      <Header>
        <Avatar
          src={activeUser.profileImg}
          alt={activeUser.name}
        />
        <div className="activeName">{activeUser.name}</div>
      </Header>
      <ChatArea ref={chatAreaRef} />
      <TextComposer
        key={activeUser.id}
        scrollToEndOfChatArea={scrollToEndOfChatArea}
      />
    </div>
  );
};

export default MainPanel;
