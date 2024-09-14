import { Message } from "../../constant/defaultMessages";
import "./MessageBox.css";

type Props = {
  message: Message;
};

const MessageBox = (props: Props) => {
  const { message } = props;

  return (
    <div className="messageBox">
      <div className="messageBoxContent">{message.content}</div>
      <div className="messageBoxTime">
        {props.message.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
    </div>
  );
};
export default MessageBox;
