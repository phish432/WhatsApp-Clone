import { Message } from "../../constant/defaultMessages";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
  onEdit: (message: Message, newContent: string) => void;
};

const MessageRow = (props: Props) => {
  const { message, isOutgoing, onDelete, onEdit } = props;

  return (
    <div className={`messageRow${isOutgoing ? " outgoing" : " incoming"}`}>
      <MessageBox
        message={message}
        isOutgoing={isOutgoing}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};

export default MessageRow;
