import type { Dispatch } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import { useRef } from "react";

import Avatar from "../Avatar/Avatar";
import ChatArea from "../ChatArea/ChatArea";
import Fallback from "../Fallback/Fallback";
import Header from "../Header/Header";
import TextComposer from "../TextComposer/TextComposer";

import "./MainPanel.css";

type Props = {
  activeUser: User | null;
  isSpacious: boolean;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const MainPanel = (props: Props) => {
  const { activeUser, isSpacious, messages, messagesDispatch } = props;

  const chatAreaRef = useRef<HTMLDivElement>(null);

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

      <ChatArea
        ref={chatAreaRef}
        activeUser={activeUser}
        isSpacious={isSpacious}
        messages={messages}
        messagesDispatch={messagesDispatch}
      />

      <TextComposer
        key={activeUser.id}
        activeUser={activeUser}
        messagesDispatch={messagesDispatch}
        scrollToEndOfChatArea={scrollToEndOfChatArea}
      />
    </div>
  );
};

export default MainPanel;
