import { Message } from "../../constant/defaultMessages";
import DeleteButton from "../DeleteButton/DeleteButton";
import MessageContent from "../MessageContent/MessageContent";
import "./MessageBox.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
};

const MessageBox = (props: Props) => {
  const { message, isOutgoing, onDelete } = props;

  const handleClick = () => {
    onDelete(message);
  };

  return isOutgoing ? (
    <div className="messageBox outgoing">
      <MessageContent message={message} />
      <DeleteButton onClick={handleClick}>Delete</DeleteButton>
    </div>
  ) : (
    <div className="messageBox incoming">
      <MessageContent message={message} />
    </div>
  );
};
export default MessageBox;
