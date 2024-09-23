import React from "react";
import "./MessageTooltip.css";

type Props = {
  atPos: { x: number; y: number };
  children?: React.ReactNode;
};
const MessageTooltip = (props: Props) => {
  const { children } = props;
  return (
    <div
      className="messageTooltip"
      style={{
        left: props.atPos.x + 15,
        top: props.atPos.y + 15,
      }}
    >
      {children}
    </div>
  );
};
export default MessageTooltip;
