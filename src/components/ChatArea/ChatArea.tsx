import type { Message, MessageAction, User } from "../../types/types";
import type { Dispatch, Ref } from "react";

import DEFAULT_CLIENT from "../../constant/defaultClient";

import { forwardRef } from "react";

import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";

import getOrderedChatHistoryOfAB from "../../utils/getChatHistory";
import isMessageFromAToB from "../../utils/isMessageFromAToB";

import "./ChatArea.css";

type Props = {
  activeUser: User;
  isSpacious: boolean;
  messages: Message[];
  messagesDispatch: Dispatch<MessageAction>;
};

const ChatArea = forwardRef(
  (props: Props, chatAreaRef: Ref<HTMLDivElement>) => {
    const { activeUser, isSpacious, messages, messagesDispatch } = props;

    const chatHistoryWithActiveUser = getOrderedChatHistoryOfAB(
      DEFAULT_CLIENT.id,
      activeUser!.id,
      messages,
    );

    if (chatHistoryWithActiveUser.length === 0) {
      return (
        <div
          className="chatArea"
          ref={chatAreaRef}
        >
          <Fallback>No messages yet</Fallback>
        </div>
      );
    }

    const isMessageOutgoing = (message: Message) => {
      return isMessageFromAToB(message, DEFAULT_CLIENT.id, activeUser!.id);
    };

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

    return (
      <div
        className="chatArea"
        ref={chatAreaRef}
      >
        {chatHistoryWithActiveUser.map((message) => {
          const messageId = message.id;
          const content = message.content;
          const time = new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          return (
            <MessageRow
              key={messageId}
              isSpacious={isSpacious}
              isOutgoing={isMessageOutgoing(message)}
              content={content}
              time={time}
              removeMessage={() => removeMessage(messageId)}
              updateMessage={(content) => updateMessage(messageId, content)}
            />
          );
        })}
      </div>
    );
  },
);

export default ChatArea;
