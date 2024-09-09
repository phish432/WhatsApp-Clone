import { Message } from "../../constant/defaultMessages";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";

type Props = {
  message: Message;
  isClient: boolean;
};

const MessageRow = (props: Props) => {
  return (
    <div className={`messageRow${props.isClient ? " client" : ""}`}>
      <MessageBox
        isClient={props.isClient}
        content={props.message.content}
        time={props.message.timestamp}
      />
    </div>
  );
};

export default MessageRow;
