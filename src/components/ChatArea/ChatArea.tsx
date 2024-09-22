import DEFAULT_CLIENT from "../../constant/defaultClient";
import React, { forwardRef } from "react";
import { useActiveUserContext } from "../../contexts/activeUserContext";
import { useMessagesContext } from "../../contexts/messagesContext";
import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";
import getOrderedChatHistoryOfAB from "../../utils/getChatHistory";
import isMessageFromAToB from "../../utils/isMessageFromAToB";
import "./ChatArea.css";

const ChatArea = forwardRef(
  (_props, chatAreaRef: React.Ref<HTMLDivElement>) => {
    const { activeUser } = useActiveUserContext();
    const { messages } = useMessagesContext();

    const chatHistoryWithAciveUser = getOrderedChatHistoryOfAB(
      DEFAULT_CLIENT.id,
      activeUser!.id,
      messages,
    );

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
            message={message}
            isOutgoing={isMessageFromAToB(
              message,
              DEFAULT_CLIENT.id,
              activeUser!.id,
            )}
          />
        ))}
      </div>
    );
  },
);

export default ChatArea;
