import { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import MessageBox from "../MessageBox/MessageBox";
import "./MessageRow.css";
import MessageDelButton from "../MessageDelButton/MessageDelButton";

type Props = {
  message: Message;
  isClient: boolean;
  onDelete: (message: Message) => void;
};

const MessageRow = (props: Props) => {
  let [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsContextMenuOpen(!isContextMenuOpen);
  };

  const handleClick = () => {
    props.onDelete(props.message);
    setIsContextMenuOpen(false);
  };

  return props.isClient ? (
    <div className="messageRow client">
      {isContextMenuOpen && <MessageDelButton onClick={handleClick} />}
      <MessageBox
        isClient={props.isClient}
        message={props.message}
        onContextMenu={handleContextMenu}
      />
    </div>
  ) : (
    <div className="messageRow">
      <MessageBox
        isClient={props.isClient}
        message={props.message}
        onContextMenu={handleContextMenu}
      />
    </div>
  );
};

export default MessageRow;
