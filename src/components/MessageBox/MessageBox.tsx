import { Message } from "../../constant/defaultMessages";
import ActionButton from "../ActionButton/ActionButton";
import MessageContent from "../MessageContent/MessageContent";
import "./MessageBox.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
  onEdit: (message: Message, newContent: string) => void;
};

const MessageBox = (props: Props) => {
  const { message, isOutgoing, onDelete, onEdit } = props;

  const handleDeleteClick = () => {
    onDelete(message);
  };

  const handleEditClick = () => {
    const newContent = prompt("Enter new message content") || "";
    onEdit(message, newContent);
  };

  return isOutgoing ? (
    <div className="messageBox outgoing">
      <MessageContent message={message} />
      <div className="hoverButtons">
        <ActionButton onClick={handleEditClick} appendClass="edit">
          Edit
        </ActionButton>
        <ActionButton onClick={handleDeleteClick} appendClass="delete">
          Delete
        </ActionButton>
      </div>
    </div>
  ) : (
    <div className="messageBox incoming">
      <MessageContent message={message} />
    </div>
  );
};
export default MessageBox;
