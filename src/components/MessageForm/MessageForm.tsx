import { Connection } from "../../constant/connections";
import { Message } from "../../constant/defaultMessages";
import { useState } from "react";
import "./MessageForm.css";

type Props = {
  activeConnection: Connection;
  allMessages: Message[];
  setAllMessages: (messages: Message[]) => void;
};

const MessageForm = (props: Props) => {
  let [message, setMessage] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (message === "") {
      return;
    }
    let newMessage: Message = {
      messageId: self.crypto.randomUUID(),
      timestamp: new Date(),
      fromConnId: null,
      toConnId: props.activeConnection.id,
      content: message,
    };
    props.setAllMessages([...props.allMessages, newMessage]);
    setMessage("");
  };

  return (
    <form className="messageForm">
      <input
        className="messageForm__input"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        className="messageForm__button"
        type="submit"
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          x="0px"
          y="0px"
        >
          <title>Send</title>
          <path
            fill="#7a8a92"
            d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
          ></path>
        </svg>
      </button>
    </form>
  );
};

export default MessageForm;
