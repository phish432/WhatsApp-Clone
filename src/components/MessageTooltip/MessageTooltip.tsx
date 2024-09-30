import type { ReactNode } from "react";

import { createPortal } from "react-dom";

import "./MessageTooltip.css";

type Props = (
  | { visible: true; atPos: { x: number; y: number } }
  | { visible: false }
) & { children?: ReactNode };

const MessageTooltip = (props: Props) => {
  if (!props.visible) {
    return null;
  }

  return createPortal(
    <div
      className="messageTooltip"
      style={{
        left: props.atPos.x + 15,
        top: props.atPos.y + 15,
      }}
    >
      {props.children}
    </div>,
    document.body,
  );
};
export default MessageTooltip;
