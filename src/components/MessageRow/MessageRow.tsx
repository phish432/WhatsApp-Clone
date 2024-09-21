import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  content: string;
  timestamp: Date;
  isOutgoing: boolean;
  removeMessage: () => void;
  editMessage: (newContent: string) => void;
};

const MessageRow = (props: Props) => {
  const { content, timestamp, isOutgoing, removeMessage, editMessage } = props;

  return (
    <div className={`messageRow${isOutgoing ? " outgoing" : " incoming"}`}>
      <MessageBox
        content={content}
        timestamp={timestamp}
        isOutgoing={isOutgoing}
        deleteMessage={removeMessage}
        editMessage={editMessage}
      />
    </div>
  );
};

export default MessageRow;
