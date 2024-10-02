import type { Message } from "../../types/types";

import { DEFAULT_CLIENT } from "../../constant";

import MessageRowBox from "./MessageRowBox";

import "./MessageRow.css";

type Props = {
  isSpacious: boolean;
  message: Message;
  removeMessage: (messageId: Message["id"]) => void;
  updateMessage: (messageId: Message["id"], content: string) => void;
};

const MessageRow = (props: Props) => {
  const { isSpacious, message, removeMessage, updateMessage } = props;

  const isOutgoing = message.fromUserId === DEFAULT_CLIENT.id;

  if (isOutgoing) {
    return (
      <div className="messageRow outgoing">
        <MessageRowBox
          isOutgoing={true}
          isSpacious={isSpacious}
          message={message}
          removeMessage={removeMessage}
          updateMessage={updateMessage}
        />
      </div>
    );
  }

  return (
    <div className="messageRow incoming">
      <MessageRowBox
        isOutgoing={false}
        isSpacious={isSpacious}
        message={message}
      />
    </div>
  );
};

export default MessageRow;
