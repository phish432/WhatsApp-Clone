import "./MessageContent.css";

type Props = {
  content: string;
  timestamp: Date;
};

const MessageContent = (props: Props) => {
  const { content, timestamp } = props;

  return (
    <div className="messageContent">
      <div className="text">{content}</div>
      <div className="time">
        {new Date(timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
};

export default MessageContent;
