import { Message } from "../../constant/defaultMessages";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  deleteMessage: (message: Message) => void;
  editMessage: (message: Message, newContent: string) => void;
};

const MessageRow = (props: Props) => {
  const { message, isOutgoing, deleteMessage, editMessage } = props;

  return (
    <div className={`messageRow${isOutgoing ? " outgoing" : " incoming"}`}>
      <MessageBox
        message={message}
        isOutgoing={isOutgoing}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
    </div>
  );
};

export default MessageRow;
