import MessageBox from "../MessageBox/MessageBox";

import "./MessageRow.css";

type Props = {
  isSpacious: boolean;
  isOutgoing: boolean;
  content: string;
  time: string;
  removeMessage: () => void;
  updateMessage: (newContent: string) => void;
};

const MessageRow = (props: Props) => {
  const {
    isSpacious,
    isOutgoing,
    content,
    time,
    removeMessage,
    updateMessage,
  } = props;

  if (!isOutgoing) {
    return (
      <div className="messageRow">
        <MessageBox
          isOutgoing={false}
          isSpacious={isSpacious}
          content={content}
          time={time}
        />
      </div>
    );
  }

  return (
    <div className="messageRow">
      <MessageBox
        isOutgoing={true}
        isSpacious={isSpacious}
        content={content}
        time={time}
        removeMessage={removeMessage}
        updateMessage={updateMessage}
      />
    </div>
  );
};

export default MessageRow;
