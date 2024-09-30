import type { UserMessagePreview } from "../../types/types";

import { useRef, useState } from "react";

import MessageTooltip from "../MessageTooltip/MessageTooltip";

import "./PreviewContent.css";

type Props = {
  preview: UserMessagePreview;
  isSpacious: boolean;
};

const PreviewContent = (props: Props) => {
  const { preview, isSpacious } = props;
  const { user, latestMsg } = preview;

  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTooltipOpen) {
      clearTimeout(timeoutRef.current);
      setClientPos({ x: e.clientX, y: e.clientY });
      timeoutRef.current = window.setTimeout(() => {
        setIsTooltipOpen(true);
        clearTimeout(timeoutRef.current);
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setIsTooltipOpen(false);
  };

  if (latestMsg !== undefined) {
    return (
      <div className="previewContent">
        <div className="banner">
          <div className="bannerName">{user.name}</div>
          <div className="bannerTime">{latestMsg.time}</div>
        </div>
        {isSpacious && (
          <>
            <div
              className="message"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <b>{latestMsg.sender}:</b> {latestMsg.content}
            </div>
            <MessageTooltip
              visible={isTooltipOpen}
              atPos={clientPos}
            >
              {latestMsg.content}
            </MessageTooltip>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="previewContent">
      <div className="banner">
        <div className="bannerName">{user.name}</div>
      </div>
      {isSpacious && (
        <div className="message none">
          <em>No Messages Yet</em>
        </div>
      )}
    </div>
  );
};

export default PreviewContent;
