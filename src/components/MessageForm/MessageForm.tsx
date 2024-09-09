import { useState } from "react";
import "./MessageForm.css";

type Props = {};

const MessageForm = (props: Props) => {
  let [message, setMessage] = useState("");
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
        onClick={(e) => {
          e.preventDefault();
          setMessage("");
        }}
      >
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24"
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
