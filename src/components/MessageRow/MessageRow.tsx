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
  const isOutgoing = props.message.fromUserId === DEFAULT_CLIENT.id;

  if (isOutgoing) {
    return (
      <div className="messageRow outgoing">
        <MessageRowBox
          {...props}
          isOutgoing={true}
        />
      </div>
    );
  }

  return (
    <div className="messageRow incoming">
      <MessageRowBox
        isSpacious={props.isSpacious}
        isOutgoing={false}
        message={props.message}
      />
    </div>
  );
};

export default MessageRow;
