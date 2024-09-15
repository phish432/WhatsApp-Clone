import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import { forwardRef } from "react";
import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";
import getActiveMessages from "./ChatAreaUtils";
import "./ChatArea.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const ChatArea = forwardRef(
  (props: Props, chatAreaRef: React.LegacyRef<HTMLDivElement>) => {
    const { activeConnection, allMessages, setAllMessages } = props;

    const activeMessages = getActiveMessages(activeConnection, allMessages);

    if (activeMessages.length === 0) {
      return (
        <div className="chatArea" ref={chatAreaRef}>
          <Fallback>No messages yet</Fallback>
        </div>
      );
    }

    const handleDelete = (message: Message) => {
      const updatedMessages = allMessages.filter(
        (m) => m.messageId !== message.messageId,
      );
      setAllMessages(updatedMessages);
    };

    const handleEdit = (message: Message, newContent: string) => {
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
        {activeMessages.reverse().map((message, index) => (
          <MessageRow
            key={index}
            message={message}
            isOutgoing={message.fromConnId === "user_id_0"}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    );
  },
);

export default ChatArea;
