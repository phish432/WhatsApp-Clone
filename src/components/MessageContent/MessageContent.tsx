import { Message } from "../../constant/defaultMessages";
import "./MessageContent.css";

type Props = {
  message: Message;
};

const MessageContent = (props: Props) => {
  const { message } = props;
  const { content, timestamp } = message;

  return (
    <div className="messageContent">
      <div className="text">{content}</div>
      <div className="time">
        {timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
};

export default MessageContent;
