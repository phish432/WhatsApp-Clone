import { Message } from "../../constant/defaultMessages";
import "./MessageBox.css";

type Props = {
  isClient: boolean;
  message: Message;
  onContextMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const MessageBox = (props: Props) => {
  return (
    <div
      className={`messageBox${props.isClient ? " client" : ""}`}
      onContextMenu={props.onContextMenu}
    >
      <div className="messageBoxContent">{props.message.content}</div>
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
