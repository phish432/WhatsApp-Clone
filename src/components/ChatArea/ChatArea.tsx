import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";
import getActiveMessages from "./ChatAreaUtils";
import "./ChatArea.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const ChatArea = (props: Props) => {
  const { activeConnection, allMessages, setAllMessages } = props;

  const activeMessages = getActiveMessages(activeConnection, allMessages);

  if (activeMessages.length === 0) {
    return (
      <div className="chatArea">
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

  return (
    <div className="chatArea">
      {activeMessages.map((message, index) => (
        <MessageRow
          key={index}
          message={message}
          isOutgoing={message.fromConnId === "user_id_0"}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ChatArea;
