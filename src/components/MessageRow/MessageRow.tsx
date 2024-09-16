import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  content: string;
  timestamp: Date;
  isOutgoing: boolean;
  deleteMessage: () => void;
  editMessage: (newContent: string) => void;
};

const MessageRow = (props: Props) => {
  const { content, timestamp, isOutgoing, deleteMessage, editMessage } = props;

  return (
    <div className={`messageRow${isOutgoing ? " outgoing" : " incoming"}`}>
      <MessageBox
        content={content}
        timestamp={timestamp}
        isOutgoing={isOutgoing}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
    </div>
  );
};

export default MessageRow;
