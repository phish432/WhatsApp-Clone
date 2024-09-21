import DEFAULT_CLIENT from "../../constant/defaultClient";
import React, { forwardRef } from "react";
import { useActiveUserContext } from "../../contexts/activeUserContext";
import { useMessagesContext } from "../../contexts/messagesContext";
import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";
import getOrderedChatHistoryOfAB from "../../utils/getChatHistory";
import isMessageFromAToB from "../../utils/isMessageFromAToB";
import "./ChatArea.css";
import { Message } from "../../types/types";

const ChatArea = forwardRef(
  (_props, chatAreaRef: React.Ref<HTMLDivElement>) => {
    const { activeUser } = useActiveUserContext();
    const { messages, messagesDispatch } = useMessagesContext();

    const chatHistoryWithAciveUser = getOrderedChatHistoryOfAB(
      DEFAULT_CLIENT.id,
      activeUser!.id,
      messages,
    );

    const removeMessage = (messageId: Message["id"]) =>
      messagesDispatch({
        type: "REMOVE_MESSAGE",
        payload: messageId,
      });

    const updateMessage = (messageId: Message["id"], newContent: string) =>
      messagesDispatch({
        type: "UPDATE_MESSAGE",
        payload: { id: messageId, newContent: newContent },
      });

    if (chatHistoryWithAciveUser.length === 0) {
      return (
        <div
          className="chatArea"
          ref={chatAreaRef}
        >
          <Fallback>No messages yet</Fallback>
        </div>
      );
    }

    return (
      <div
        className="chatArea"
        ref={chatAreaRef}
      >
        {chatHistoryWithAciveUser.map((message) => (
          <MessageRow
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
            isOutgoing={isMessageFromAToB(
              message,
              DEFAULT_CLIENT.id,
              activeUser!.id,
            )}
            removeMessage={() => removeMessage(message.id)}
            editMessage={(newContent) => updateMessage(message.id, newContent)}
          />
        ))}
      </div>
    );
  },
);

export default ChatArea;
