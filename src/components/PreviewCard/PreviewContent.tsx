import type { MouseEvent } from "react";
import type { UserMessagePreview } from "../../types/types";

import { useRef, useState } from "react";

import useShow from "../../hooks/useShow";

import PreviewTooltip from "./PreviewTooltip";

type Props = {
  preview: UserMessagePreview;
  isSpacious: boolean;
};

const PreviewContent = (props: Props) => {
  const { preview, isSpacious } = props;
  const { user, latestMsg } = preview;

  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [isTooltipOpen, openTooltip, closeTooltip] = useShow(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isTooltipOpen) {
      clearTimeout(timeoutRef.current);
      setClientPos({ x: event.clientX, y: event.clientY });
      timeoutRef.current = window.setTimeout(() => {
        openTooltip();
        clearTimeout(timeoutRef.current);
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    closeTooltip();
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

            {isTooltipOpen && (
              <PreviewTooltip
                atPos={clientPos}
                content={latestMsg.content}
              />
            )}
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
