import { Message } from "../../constant/defaultMessages";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
};

const MessageRow = (props: Props) => {
  const { message, isOutgoing, onDelete } = props;

  return (
    <div className={`messageRow ${isOutgoing ? "outgoing" : "incoming"}`}>
      <MessageBox
        message={message}
        isOutgoing={isOutgoing}
        onDelete={onDelete}
      />
    </div>
  );
};

export default MessageRow;
