import type { Message } from "../../types/types";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
};

const MessageRow = (props: Props) => {
  const { message, isOutgoing } = props;

  return (
    <div className={`messageRow${isOutgoing ? " outgoing" : " incoming"}`}>
      <MessageBox
        message={message}
        isOutgoing={isOutgoing}
      />
    </div>
  );
};

export default MessageRow;
