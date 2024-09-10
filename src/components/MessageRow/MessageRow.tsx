import { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import MessageBox from "../MessageBox/MessageBox";
import MessageDelButton from "../MessageDelButton/MessageDelButton";
import "./MessageRow.css";

type Props = {
  message: Message;
  isOutgoing: boolean;
  onDelete: (message: Message) => void;
};

const MessageRow = (props: Props) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const { message, isOutgoing, onDelete } = props;

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsContextMenuOpen(!isContextMenuOpen);
  };

  const handleClick = () => {
    onDelete(message);
    setIsContextMenuOpen(false);
  };

  return isOutgoing ? (
    <div className="messageRow outgoing">
      {isContextMenuOpen && <MessageDelButton onClick={handleClick} />}
      <MessageBox message={message} onContextMenu={handleContextMenu} />
    </div>
  ) : (
    <div className="messageRow incoming">
      <MessageBox message={message} onContextMenu={handleContextMenu} />
      {isContextMenuOpen && <MessageDelButton onClick={handleClick} />}
    </div>
  );
};

export default MessageRow;
