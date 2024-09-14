import { Message } from "../../constant/defaultMessages";
import MessageBox from "../MessageBox/MessageBox";
import MessageDelButton from "../MessageDelButton/MessageDelButton";
import "./MessageRow.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
};

const MessageRow = (props: Props) => {
  const { message, isOutgoing, onDelete } = props;

  const handleClick = () => {
    onDelete(message);
  };

  return isOutgoing ? (
    <div className="messageRow outgoing">
      <MessageDelButton onClick={handleClick} />
      <MessageBox message={message} />
    </div>
  ) : (
    <div className="messageRow incoming">
      <MessageBox message={message} />
    </div>
  );
};

export default MessageRow;
