import type { UserMessagePreview } from "../../types/types";
import DEFAULT_CLIENT from "../../constant/defaultClient";
import isMessageFromAToB from "../../utils/isMessageFromAToB";
import "./PreviewContent.css";

type Props = {
  preview: UserMessagePreview;
};

const PreviewContent = (props: Props) => {
  const { preview } = props;
  const { user, latestMessage } = preview;

  if (latestMessage === null) {
    return (
      <div className="previewContent">
        <div className="banner">
          <div className="bannerName">{user.name}</div>
        </div>
        <div className="message none">
          <em>No Messages Yet</em>
        </div>
      </div>
    );
  }

  const sender = isMessageFromAToB(latestMessage, user.id, DEFAULT_CLIENT.id)
    ? user.name
    : "You";
  const time24Hour = new Date(latestMessage.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const content = latestMessage.content;

  return (
    <div className="previewContent">
      <div className="banner">
        <div className="bannerName">{user.name}</div>
        <div className="bannerTime">{time24Hour}</div>
      </div>
      <div
        className="message"
        title={content}
      >
        {sender}: {content}
      </div>
    </div>
  );
};

export default PreviewContent;
