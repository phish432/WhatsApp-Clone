import type { Ref } from "react";
import type { Message } from "../../types/types";

import ChatAreaFallback from "./ChatAreaFallback";
import ChatAreaMain from "./ChatAreaMain";

import "./ChatArea.css";

type Props = {
  chatAreaRef: Ref<HTMLDivElement>;
  isSpacious: boolean;
  chatHistory: Message[];
  removeMessage: (messageId: Message["id"]) => void;
  updateMessage: (messageId: Message["id"], content: string) => void;
};

const ChatArea = (props: Props) => {
  return (
    <div
      className="chatArea"
      ref={props.chatAreaRef}
    >
      {props.chatHistory.length === 0 ? (
        <ChatAreaFallback />
      ) : (
        <ChatAreaMain {...props} />
      )}
    </div>
  );
};

export default ChatArea;
