import { Message } from "../../constant/defaultMessages";
import "./MessageBox.css";

type Props = {
  message: Message;
  onContextMenu: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const MessageBox = (props: Props) => {
  const { message, onContextMenu } = props;

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    onContextMenu(event);
  };

  return (
    <div className="messageBox" onContextMenu={handleContextMenu}>
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
