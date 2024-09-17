import { ConnectionWithPreview } from "../../types/types";
import isMessageFromAToB from "../../utils/isMessageFromAToB";
import PreviewBanner from "../PreviewBanner/PreviewBanner";
import PreviewMessage from "../PreviewMessage/PreviewMessage";
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
        <PreviewBanner connectionName={connection.name} timestamp={null} />
        <PreviewMessage sender={null} content={null} />
      </div>
    );
  }

  const { content, timestamp } = latestMessage;
  const sender = isMessageFromAToB(latestMessage, connection.id, "user_id_0")
    ? connection.name
    : "You";

  return (
    <div className="preview">
      <PreviewBanner connectionName={connection.name} timestamp={timestamp} />
      <PreviewMessage sender={sender} content={content} />
    </div>
  );
};

export default Preview;
