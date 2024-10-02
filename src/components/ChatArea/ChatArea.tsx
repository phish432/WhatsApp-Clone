import type { Dispatch, RefObject } from "react";
import type { Message, MessageAction } from "../../types/types";

import { useCallback } from "react";

import ChatAreaFallback from "./ChatAreaFallback";
import ChatAreaMain from "./ChatAreaMain";

import "./ChatArea.css";

type Props = {
  chatAreaRef: RefObject<HTMLDivElement>;
  isSpacious: boolean;
  chatHistory: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const ChatArea = (props: Props) => {
  const { chatAreaRef, isSpacious, chatHistory, messagesDispatch } = props;

  const removeMessage = useCallback(
    (messageId: Message["id"]) =>
      messagesDispatch({
        type: "REMOVE_MESSAGE",
        payload: messageId,
      }),
    [messagesDispatch],
  );

  const updateMessage = useCallback(
    (messageId: Message["id"], content: string) =>
      messagesDispatch({
        type: "UPDATE_MESSAGE",
        payload: { id: messageId, newContent: content },
      }),
    [messagesDispatch],
  );

  return (
    <div
      className="chatArea"
      ref={chatAreaRef}
    >
      {chatHistory.length === 0 ? (
        <ChatAreaFallback />
      ) : (
        <ChatAreaMain
          chatHistory={chatHistory}
          isSpacious={isSpacious}
          removeMessage={removeMessage}
          updateMessage={updateMessage}
        />
      )}
    </div>
  );
};

export default ChatArea;
