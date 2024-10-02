import { createPortal } from "react-dom";

import "./PreviewTooltip.css";

type Props = {
  atPos: { x: number; y: number };
  content: string;
};

const PreviewTooltip = (props: Props) => {
  const { atPos, content } = props;

  return createPortal(
    <div
      className="previewTooltip"
      style={{
        left: atPos.x + 15,
        top: atPos.y + 15,
      }}
    >
      {content}
    </div>,
    document.body,
  );
};

export default PreviewTooltip;
