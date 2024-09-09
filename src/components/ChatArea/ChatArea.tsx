import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import Fallback from "../Fallback/Fallback";
import MessageRow from "../MessageRow/MessageRow";
import "./ChatArea.css";

type Props = {
  activeConnection: Connection;
  activeMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const ChatArea = (props: Props) => {
  if (props.activeMessages.length === 0) {
    return (
      <div className="chatArea">
        <Fallback>No messages yet</Fallback>
      </div>
    );
  }

  return (
    <div className="chatArea">
      {props.activeMessages.map((message, index) => (
        <MessageRow
          key={index}
          message={message}
          isClient={message.fromConnId === null}
        />
      ))}
    </div>
  );
};

export default ChatArea;
