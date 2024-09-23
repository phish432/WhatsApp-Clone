import type { UserMessagePreview } from "../../types/types";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import DEFAULT_CLIENT from "../../constant/defaultClient";
import MessageTooltip from "../MessageTooltip/MessageTooltip";
import isMessageFromAToB from "../../utils/isMessageFromAToB";
import "./PreviewContent.css";

type Props = {
  preview: UserMessagePreview;
};

const PreviewContent = (props: Props) => {
  const { preview } = props;
  const { user, latestMessage } = preview;

  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const intervalRef = useRef<number | undefined>(undefined);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTooltipOpen) {
      clearInterval(intervalRef.current);
      setClientPos({ x: e.clientX, y: e.clientY });
      intervalRef.current = window.setInterval(() => {
        setIsTooltipOpen(true);
        clearInterval(intervalRef.current);
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setIsTooltipOpen(false);
  };

  if (latestMessage !== null) {
    const sender = isMessageFromAToB(latestMessage, user.id, DEFAULT_CLIENT.id)
      ? user.name
      : "You";
    const time24Hour = new Date(latestMessage.timestamp).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      },
    );
    const content = latestMessage.content;

    return (
      <div className="previewContent">
        <div className="banner">
          <div className="bannerName">{user.name}</div>
          <div className="bannerTime">{time24Hour}</div>
        </div>
        <div
          className="message"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <b>{sender}:</b> {content}
        </div>
        {isTooltipOpen &&
          createPortal(
            <MessageTooltip atPos={clientPos}>{content}</MessageTooltip>,
            document.body,
          )}
      </div>
    );
  }

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
};

export default PreviewContent;
