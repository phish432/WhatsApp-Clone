import { ConnectionWithPreview } from "../../types/types";
import isMessageFromAToB from "../../utils/isMessageFromAToB";
import "./Preview.css";

type Props = {
  preview: ConnectionWithPreview;
};

const Preview = (props: Props) => {
  const { preview } = props;
  const { connection, latestMessage } = preview;

  if (latestMessage === null) {
    return (
      <div className="preview">
        <div className="previewBanner">
          <div className="previewBannerName">{connection.name}</div>
        </div>
        <div className="previewMessage none">
          <em>No Messages Yet</em>
        </div>
      </div>
    );
  }

  const time24Hour = latestMessage.timestamp.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const sender = isMessageFromAToB(latestMessage, connection.id, "user_id_0")
    ? connection.name
    : "You";
  const content = latestMessage.content;

  return (
    <div className="preview">
      <div className="previewBanner">
        <div className="previewBannerName">{connection.name}</div>
        <div className="previewBannerTime">{time24Hour}</div>
      </div>
      <div className="previewMessage" title={content}>
        {sender}: {content}
      </div>
    </div>
  );
};

export default Preview;
