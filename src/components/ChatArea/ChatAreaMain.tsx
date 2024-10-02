import type { Ref } from "react";
import type { Message } from "../../types/types";

import MessageRow from "../MessageRow/MessageRow";

type Props = {
  chatAreaRef: Ref<HTMLDivElement>;
  isSpacious: boolean;
  chatHistory: Message[];
  removeMessage: (messageId: Message["id"]) => void;
  updateMessage: (messageId: Message["id"], content: string) => void;
};

const ChatAreaMain = (props: Props) => {
  const { chatHistory, isSpacious, removeMessage, updateMessage } = props;

  return (
    <>
      {chatHistory.map((message) => (
        <MessageRow
          key={message.id}
          isSpacious={isSpacious}
          message={message}
          removeMessage={removeMessage}
          updateMessage={updateMessage}
        />
      ))}
    </>
  );
};

export default ChatAreaMain;
