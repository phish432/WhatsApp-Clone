import type { Dispatch } from "react";
import type { Message, MessageAction, User } from "../../types/types";

import { DEFAULT_CLIENT } from "../../constant";

import { useRef } from "react";

import getOrderedChatHistoryOfAB from "../../utils/getChatHistory";

import ChatArea from "../ChatArea/ChatArea";
import TextComposer from "../TextComposer/TextComposer";

type Props = {
  activeUser: User;
  isSpacious: boolean;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const MainPanelMain = (props: Props) => {
  const { activeUser, isSpacious, messages, messagesDispatch } = props;

  const chatAreaRef = useRef<HTMLDivElement>(null);

  const chatHistory = getOrderedChatHistoryOfAB(
    DEFAULT_CLIENT.id,
    activeUser.id,
    messages,
  );

  const removeMessage = (messageId: Message["id"]) =>
    messagesDispatch({
      type: "REMOVE_MESSAGE",
      payload: messageId,
    });

  const updateMessage = (messageId: Message["id"], content: string) =>
    messagesDispatch({
      type: "UPDATE_MESSAGE",
      payload: { id: messageId, newContent: content },
    });

  const createMessage = (content: string) => {
    if (content !== "") {
      const newMessage = {
        id: window.crypto.randomUUID(),
        timestamp: new Date(),
        fromUserId: DEFAULT_CLIENT.id,
        toUserId: activeUser!.id,
        content: content,
      } as Message;

      messagesDispatch({
        type: "ADD_MESSAGE",
        payload: newMessage,
      });
    }

    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  return (
    <>
      <ChatArea
        chatAreaRef={chatAreaRef}
        isSpacious={isSpacious}
        chatHistory={chatHistory}
        removeMessage={removeMessage}
        updateMessage={updateMessage}
      />

      <TextComposer
        key={activeUser.id}
        createMessage={createMessage}
      />
    </>
  );
};

export default MainPanelMain;
