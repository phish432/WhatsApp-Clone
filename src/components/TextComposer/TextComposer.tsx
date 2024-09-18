import { Connection, Message } from "../../types/types";
import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import "./TextComposer.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
  scrollToEndOfChatArea: () => void;
};

const TextComposer = (props: Props) => {
  const { activeConnection, allMessages, setAllMessages, scrollToEndOfChatArea } = props;

  const [newContent, setNewContent] = useState<string>("");

  const handleClick = () => {
    if (newContent !== "") {
      const newMessage: Message = {
        messageId: self.crypto.randomUUID(),
        timestamp: new Date(),
        fromConnId: "user_id_0",
        toConnId: activeConnection.id,
        content: newContent,
      };

      setAllMessages([...allMessages, newMessage]);
      setNewContent("");
      scrollToEndOfChatArea();
    }
  };

  return (
    <div className="textComposer">
      <form className="messageForm">
        <input
          name="content"
          className="content"
          type="text"
          placeholder="Type a message"
          value={newContent}
          onChange={(event) => setNewContent(event.target.value)}
        />
        <ActionButton onClick={handleClick}>
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
