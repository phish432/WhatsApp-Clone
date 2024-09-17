import { Connection, Message } from "../../types/types";
import { forwardRef } from "react";
import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";
import getChatHistory from "../../utils/getChatHistory";
import "./ChatArea.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const ChatArea = forwardRef(
  (props: Props, chatAreaRef: React.Ref<HTMLDivElement>) => {
    const { activeConnection, allMessages, setAllMessages } = props;

    const chatHistoryWithActiveConnection = getChatHistory(
      activeConnection,
      allMessages,
    );

    if (chatHistoryWithActiveConnection.length === 0) {
      return (
        <div className="chatArea" ref={chatAreaRef}>
          <Fallback>No messages yet</Fallback>
        </div>
      );
    }

    const deleteMessage = (message: Message) => {
      const updatedMessages = allMessages.filter(
        (m) => m.messageId !== message.messageId,
      );
      setAllMessages(updatedMessages);
    };

    const editMessage = (message: Message, newContent: string) => {
      const updatedMessages = allMessages.map((m) => {
        if (m.messageId === message.messageId) {
          return {
            ...m,
            content: newContent,
          };
        }
        return m;
      });
      setAllMessages(updatedMessages);
    };

    return (
      <div className="chatArea">
        {chatHistoryWithActiveConnection.map((message) => (
          <MessageRow
            key={message.messageId}
            content={message.content}
            timestamp={message.timestamp}
            isOutgoing={message.fromConnId === "user_id_0"}
            deleteMessage={() => deleteMessage(message)}
            editMessage={(newConent: string) => editMessage(message, newConent)}
          />
        ))}
      </div>
    );
  },
);

export default ChatArea;
