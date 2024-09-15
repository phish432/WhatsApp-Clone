import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import "./TextComposer.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
  onSend: () => void;
};

const TextComposer = (props: Props) => {
  const [newContent, setNewContent] = useState<string>("");

  const { activeConnection, allMessages, setAllMessages, onSend } = props;

  const handleClick = () => {
    if (newContent !== "") {
      let newMessage: Message = {
        messageId: self.crypto.randomUUID(),
        timestamp: new Date(),
        fromConnId: "user_id_0",
        toConnId: activeConnection.id,
        content: newContent,
      };

      setAllMessages([...allMessages, newMessage]);
      setNewContent("");
      onSend();
    }
  };

  return (
    <div className="textComposer">
      <form className="messageForm">
        <input
          className="content"
          type="text"
          placeholder="Type a message"
          value={newContent}
          onChange={(event) => setNewContent(event.target.value)}
        />
        <ActionButton onClick={handleClick} appendClass="send">
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            x="0px"
            y="0px"
          >
            <path
              fill="#7a8a92"
              d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
            ></path>
          </svg>
        </ActionButton>
      </form>
    </div>
  );
};

export default TextComposer;
